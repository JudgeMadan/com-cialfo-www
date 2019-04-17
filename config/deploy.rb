# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "ciaflo-www-marketing"
set :repo_url, 'git@github.com:cialfo/cialfo-www-marketing'
set :pty, true

set :deploy_to, '~/apps/marketing_cialfo_co'

set :keep_releases, 2

namespace :deploy do
  after :updated, "yarn:install"
  after :updated, "yarn:build"
  # after :finished, "nginx:reload"
end