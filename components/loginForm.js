import React, { useCallback, useMemo, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import useInput from "../hooks/useInput";
// import styled from "styled-components"

// const ButtonWrapper = styled.div`
//   margin-top: 10px;
// `
const LoginForm = ({ setIsLoggedIn }) => {
  const [id , onChangeId ] = useInput('')
  const [password , onChangePassword ] = useInput('')
  
  

  const style = useMemo(() => ({ marginTop: 10 }), []);
  const onSubmitForm = useCallback(() => {
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          type="password"
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={style}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
      <div></div>
    </Form>
  );
};

export default LoginForm;
