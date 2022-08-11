# Preview all emails at http://localhost:3000/rails/mailers/verify_mailer
class VerifyMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/verify_mailer/verify
  def verify
    VerifyMailer.verify
  end

end
