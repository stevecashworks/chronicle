import { useState } from "react";
import styled from "styled-components";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiShield,
} from "react-icons/fi";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 600;
  font-size: .95rem;
`;

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
`;

const LeftIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  background: transparent;
  cursor: pointer;

  color: var(--text-secondary);

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;

  border-radius: 16px;
  border: 1px solid var(--border-light);

  padding: 0 3rem 0 3rem;

  font-size: .96rem;

  transition: .25s;

  background: var(--surface);

  &:focus{
    outline:none;
    border-color:var(--primary);
    box-shadow:0 0 0 4px rgba(11,93,75,.12);
  }

  &::placeholder{
    color:#9CA3AF;
  }
`;

const Row = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:1rem;

  flex-wrap:wrap;
`;

const Remember = styled.label`
  display:flex;
  align-items:center;
  gap:.65rem;

  font-size:.9rem;
  color:var(--text-secondary);

  cursor:pointer;

  input{
    accent-color:var(--primary);
  }
`;

const Forgot = styled.a`
  color:var(--primary);
  text-decoration:none;
  font-weight:600;

  &:hover{
    text-decoration:underline;
  }
`;

const LoginButton = styled.button`
  height:56px;

  border:none;
  border-radius:16px;

  background:linear-gradient(
    90deg,
    #0B5D4B,
    #0A7A63
  );

  color:white;

  font-weight:700;
  font-size:1rem;

  cursor:pointer;

  transition:.25s;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:.75rem;

  &:hover{
    transform:translateY(-2px);
    box-shadow:0 12px 30px rgba(11,93,75,.25);
  }

  &:active{
    transform:none;
  }
`;

const Divider = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;

  color:var(--text-secondary);

  &::before,
  &::after{
    content:"";
    flex:1;
    height:1px;
    background:var(--border-light);
  }
`;

const SSOButton = styled.button`
  height:54px;

  border-radius:16px;

  border:1px solid var(--border-light);

  background:white;

  cursor:pointer;

  font-weight:600;

  display:flex;
  justify-content:center;
  align-items:center;
  gap:.75rem;

  transition:.25s;

  &:hover{
    background:#F8FAFC;
    border-color:var(--primary);
  }
`;

const LoginForm = () => {

  const [showPassword,setShowPassword]=useState(false);

  const submit=(e)=>{
    e.preventDefault();

    // TODO:
    // login logic here
  }

  return (

    <Form onSubmit={submit}>

      <InputGroup>

        <Label>Email Address</Label>

        <InputWrapper>

          <LeftIcon>
            <FiMail/>
          </LeftIcon>

          <Input
            type="email"
            placeholder="Enter your email"
          />

        </InputWrapper>

      </InputGroup>

      <InputGroup>

        <Label>Password</Label>

        <InputWrapper>

          <LeftIcon>
            <FiLock/>
          </LeftIcon>

          <Input
            type={showPassword?"text":"password"}
            placeholder="Enter your password"
          />

          <TogglePassword
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
          >

            {showPassword
              ? <FiEyeOff/>
              : <FiEye/>
            }

          </TogglePassword>

        </InputWrapper>

      </InputGroup>

      <Row>

        <Remember>

          <input type="checkbox"/>

          Remember Me

        </Remember>

        <Forgot href="#">
          Forgot Password?
        </Forgot>

      </Row>

      <LoginButton>

        <FiLogIn/>

        Login

      </LoginButton>

      <Divider>

        OR

      </Divider>

      <SSOButton type="button">

        <FiShield/>

        Continue with Government SSO

      </SSOButton>

    </Form>

  );
};

export default LoginForm;