/*
  # Create trigger to send email on new contact message

  This migration sets up a PostgreSQL trigger that calls the send-contact-email edge function
  whenever a new message is inserted into the contact_messages table.
*/

CREATE OR REPLACE FUNCTION public.trigger_send_contact_email()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url:='https://mydppyotdfasidmrzsko.supabase.co/functions/v1/send-contact-email',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.jwt_token', true) || '"}'::jsonb,
      body:=jsonb_build_object('record', row_to_json(NEW)),
      timeout_ms:=5000
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS contact_messages_email_trigger ON public.contact_messages;

CREATE TRIGGER contact_messages_email_trigger
AFTER INSERT ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION public.trigger_send_contact_email();
