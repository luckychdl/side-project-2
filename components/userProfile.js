import React from "react"
import { Avatar, Button, Card } from "antd"
const UserProfile = ({ setIsLoggedIn }) => {

  return (
    <Card
    actions={[
      <div key='twit'>짹짹<br />0</div>,
      <div key='followings'>팔로잉<br />0</div>,
      <div key='followers'>팔로워<br />0</div>,
    ]}>
      <Card.Meta title="vivid" avatar={<Avatar>VI</Avatar>}/>
      <Button onClick={() => setIsLoggedIn(false)}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile