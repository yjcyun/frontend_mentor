import { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import { Input } from '../components/Input';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const ContactGrid = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 0;

  .subtitle {
    min-width: 350px;
  }

  .content-div {
    width: 635px;

    .content-body {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 996px) {
    flex-direction: column;
    gap: 24px;
    padding: 32px 0;

    .subtitle {
      min-width: 100%;
    }

    .content-div {
      width: 100%;
    }
  }
`;

const ContactMePage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errorMsg = 'This field is required';

    let nameError = '';
    let emailError = '';
    let messageError = '';

    if (!name) {
      nameError = errorMsg;
    }

    if (!email) {
      emailError = errorMsg;
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailError = 'Please use a valid email address';
    }

    if (!message) {
      messageError = errorMsg;
    }

    if (nameError || emailError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validate();

    if (isValid) {
      setErrors({ name: '', email: '', message: '' });
      setName('');
      setEmail('');
      setMessage('');
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <SEO title='Contact Me' />
      <Layout>
        <Divider />
        <ContactGrid role='region' aria-labelledby={`Get in touch`}>
          <h2 className='subtitle'>Get in Touch</h2>

          <div className='content-div'>
            <p className='content-body'>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <SocialShare />
          </div>
        </ContactGrid>
        <Divider />
        <ContactGrid role='form' aria-labelledby={`Contact form`}>
          <h2 className='subtitle'>Contact Me</h2>

          <form className='content-div' onSubmit={(e) => handleSubmit(e)}>
            <Input
              error={errors.name}
              label='Name'
              onChange={(e) => setName(e.target.value)}
              placeholder='Jane Appleseed'
              value={name}
            />
            <Input
              error={errors.email}
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email@example.com'
              value={email}
            />
            <Input
              error={errors.message}
              label='Message'
              multiline
              onChange={(e) => setMessage(e.target.value)}
              placeholder='How can I help?'
              value={message}
            />
            <Button loading={loading}>send message</Button>
          </form>
        </ContactGrid>
      </Layout>
    </>
  );
};

export default ContactMePage;
