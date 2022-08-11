class VerifyMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.verify_mailer.verify.subject
  #
  def verify
    @greeting = "Hi"

    mail(
      to: User.first.email, 
      subject: "Please verify your email with BuddyBudge"
      ) 
  end
end
