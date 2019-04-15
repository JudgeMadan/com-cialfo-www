namespace :yarn do
  desc "yarn install in the current release"
  task :install do
  	on roles(:all) do
  	  execute "cd #{release_path}; yarn install"
    end
  end
end