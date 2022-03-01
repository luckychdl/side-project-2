import Head from 'next/head'
import React from 'react'
import AppLayout from '../components/appLayout'
import NickNameEdit from '../components/NickNameEdit'
import FollowList from '../components/FollowList'
const Profile = () => {
  const followerList = [{nickname: '비비드'}, {nickname: '바보'}, {nickname: '멍청이'}]
  const followingList = [{nickname: '비비드'}, {nickname: '바보'}, {nickname: '멍청이'}]
  return (
    <>
    <Head>
      <title>프로필 | NodeBird</title>
    </Head>
    <AppLayout>
      <NickNameEdit />
      <FollowList header="팔로잉 목록" data={followingList}/>
      <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
    </>
  )
}

export default Profile