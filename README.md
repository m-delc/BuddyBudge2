Initial:

    gem 'bcrypt', '~> 3.1', '>= 3.1.16'

    gem 'rack-cors', :require => 'rack/cors'

    gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'

    gem 'byebug', '~> 11.1', '>= 11.1.3'

#001      

    added to config/application.rb:

        config.middleware.use ActionDispatch::Cookies
        config.middleware.use ActionDispatch::Session::CookieStore

    added:

        User resource, with "has_secure_password" in User model

    added to application_controller:

        before_action
        current_user
        authorized_user

    added fallback_controller:

        with index method

#002

update
update 2# BuddyBudge2
