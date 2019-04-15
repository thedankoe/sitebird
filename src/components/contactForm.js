import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import SelectBox from './selectBox'

export const FormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormStyle = styled.form`
  margin-top: ${props => props.theme.textSpace};
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    color: ${props => props.theme.primary};
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  input {
    :focus {
      border-bottom: 3px solid ${props => props.theme.success};
    }
    :focus:invalid {
      border-bottom: 3px solid ${props => props.theme.warning};
    }
  }
  input,
  textarea {
    width: 80rem;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 3px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1.8rem;

    @media ${device.tablet} {
      width: 60rem;
    }

    @media ${device.tabletS} {
      width: 40rem;
    }

    :focus {
      outline: none;
    }
    ::placeholder {
      font-family: 'Raleway', sans-serif;
      font-size: 1.8rem;
      color: ${props => props.theme.lightGrey};
    }
  }
  :not(:last-child) {
    margin-bottom: ${props => props.theme.textSpace};
  }
`

export const FormButton = styled.button`
  padding: 1.5rem 2rem;
  background: ${props => props.theme.tertiary};
  font-size: 1.8rem;
  color: #fff;
  border: none;
  border-radius: 3rem;
  box-shadow: ${props => props.theme.bs};
  transition: all ease 0.3s;
  :hover {
    cursor: pointer;
    background: ${props => props.theme.tertiaryLight};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.5rem);
  }
`

const ContactForm = () => (
  <FormWrapper>
    <FormStyle
      name="contact"
      method="POST"
      action="https://mailthis.to/site-bird-email"
    >
      <input
        type="hidden"
        name="_subject"
        value="SiteBird Contact Form Submission"
      />
      <input
        type="hidden"
        name="_after"
        value="https://www.site-bird.com/contact-success"
      />
      <input type="hidden" name="_honeypot" value="" />
      <input type="hidden" name="_confirmation" value="Success!" />
      <FormGroup>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="business">Business Name</label>
        <input
          type="text"
          name="business"
          id="business"
          placeholder="John Doe Chiropractic"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="url">Business URL</label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="www.johndoechiro.com"
        />
      </FormGroup>
      <SelectBox
        labelText="Service Interested In"
        items={[
          { value: 'Consultation', id: 1 },
          { value: 'Website Creation', id: 2 },
          { value: 'Social Media Management', id: 3 },
          { value: 'Lead Generation', id: 4 },
        ]}
      />
      <FormGroup>
        <label htmlFor="message">Questions or Concerns</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Need more info?"
        />
      </FormGroup>
      <FormButton type="submit">Submit</FormButton>
    </FormStyle>
  </FormWrapper>
)

export default ContactForm