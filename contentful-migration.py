#!/usr/bin/python

import sys
import subprocess
import os


class Migration:
    def __init__(self, token = "CFPAT-a-8-FZ9scJPnwVvzCzF2WLI6pZ9lTxhc6de7FKjORoA"):
        self.us_space = "2w8l1bcem16l"
        self.cn_space = "1acwuo4zy8aa"
        self.in_space = "6s1t375h60iy"
        self.intl_space = "kq0n6h3xq8i9"
        self.all_spaces = [self.us_space, self.cn_space, self.in_space, self.intl_space]
        self.space_dic = {self.us_space:"US", self.cn_space:"CN", self.in_space:"IN", self.intl_space:"INTL"}
        self.token = token

        os.chdir(sys.path[0])
        self.check_dependencies()
        self.login(token)


    def check_dependencies(self):
        # Contentful-CLI Dependency
        contentful_cli = subprocess.run(['npm', 'list', '-g', 'contentful-cli'], stdout=subprocess.PIPE)
        if("contentful-cli" in contentful_cli.stdout.decode('utf-8')):
            print("Contentful CLI Found.")
        else:
            user_input = input("Contentful CLI not found. \n1. Install now \n2. I promise it's already installed! (Override detection)\nOption> ")
            if(user_input == "1"):
                subprocess.run(['npm', 'install', '-g', 'contentful-cli'])

        # Contentful-Clean-Space Dependency
        contentful_clean_space = subprocess.run(['npm', 'list', '-g', 'contentful-clean-space'], stdout=subprocess.PIPE)
        if("contentful-clean-space" in contentful_clean_space.stdout.decode('utf-8')):
            print("Contentful-Clean-Space Found.")
        else:
            user_input = input("Contentful-Clean-Space not found. \n1. Install now \n2. I promise it's already installed! (Override detection)\nOption> ")
            if(user_input == "1"):
                subprocess.run(['npm', 'install', '-g', 'contentful-clean-space'])


    def login(self, token):
        result = subprocess.run(['contentful', 'login', '--management-token', token], stdout=subprocess.PIPE)
        if("Great!" in result.stdout.decode('utf-8')):
            print("Login Successful.")
        else:
            raise SystemError("Authentication unsuccessful. Please specify a new token.")


    def backup(self): #TODO: Error Handling
        try:
            os.mkdir("contentful-backup")
        except(FileExistsError):
            pass
        os.chdir("contentful-backup")

        for space in self.all_spaces:
            print("===========================================")
            print("= EXPORTING SPACE " + space + "/master (" + self.space_dic[space] + ") =")
            print("===========================================")
            subprocess.run(['contentful', 'space', 'export', '--space-id', space, '--environment-id', 'master'])

            print("===========================================")
            print("= EXPORTING SPACE " + space + "/master (" + self.space_dic[space] + ") =")
            print("===========================================")
            subprocess.run(['contentful', 'space', 'export', '--space-id', space, '--environment-id', 'staging'])

    def wipe(self):
        for space in self.all_spaces:
            print("===========================================")
            print("== WIPING SPACE " + space + "/master (" + self.space_dic[space] + ") ==")
            print("===========================================")
            subprocess.run(['contentful-clean-space', '--accesstoken', self.token, '--space-id', space, '--env', 'master', '--yes'])

    def import_space(self):
        try:
            os.chdir("contentful-backup")
        except(FileNotFoundError):
            pass

        dir = os.listdir()

        for space in self.all_spaces:
            print("===========================================")
            print("== MIGRATING " + space + "/staging (" + self.space_dic[space] + ") ==")
            print("====== TO " + space + "/master (" + self.space_dic[space] + ") ======")
            print("===========================================")
            migration_files = []
            for file in dir:
                if 'contentful-export-' + space + '-staging-' in file:
                    migration_files.append(file)

            latest_file = sorted(migration_files)[-1]
            subprocess.run(['contentful', 'space', 'import', '--space-id', space, '--environment-id', 'master', '--content-file', latest_file])



if(__name__ == "__main__"):
    if("--help" in sys.argv):
        print("judgemadan/migration-script@1.0.0")
        print("--help       Shows Help")
        print("--backup     Backs up all Contentful spaces to contentful-backup/*")
        print("--wipe       Backs up all Contentful spaces and wipes the master environment")
        print("--import     Backs up all Contentful spaces and imports staging environments to master")
        print("--deploy     Backs up all Contentful spaces and wipes the master environment, then imports all staging environments to master")
        exit()

    # Initialize, Check for Dependencies, and Login
    contentful_migration = Migration()

    # Deal with Parameters
    if("--deploy" in sys.argv):
        user_input = input("\033[91mALERT: \033[00m Are you sure you want to migrate all staging environments to master? \nPlease make sure the production key is set to staging. \033[96mY/n\033[00m: ")
        if(user_input.lower() == "y"):
            contentful_migration.backup()
            contentful_migration.wipe()
            contentful_migration.import_space()

    elif("--wipe" in sys.argv):
        user_input = input("\033[91mALERT: \033[00m Are you sure you want to wipe master environments from spaces? \nPlease make sure the production key is set to staging. \033[96mY/n\033[00m: ")
        if(user_input.lower() == "y"):
            contentful_migration.backup()
            contentful_migration.wipe()

    elif("--import" in sys.argv):
        user_input = input("\033[91mALERT: \033[00m Are you sure you want to migrate all staging environments to master without wiping the master space? \nPlease make sure the production key is set to staging. \033[96mY/n\033[00m: ")
        if(user_input.lower() == "y"):
            # contentful_migration.backup()
            contentful_migration.import_space()

    elif("--backup" in sys.argv):
        contentful_migration.backup()
