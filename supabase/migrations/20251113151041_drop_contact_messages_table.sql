/*
  # Drop contact messages table and related objects

  Removing the contact_messages table and all related triggers and functions
  since we'll send emails directly via edge function instead.
*/

DROP TRIGGER IF EXISTS contact_messages_email_trigger ON public.contact_messages;
DROP FUNCTION IF EXISTS public.trigger_send_contact_email();
DROP TABLE IF EXISTS public.contact_messages;
