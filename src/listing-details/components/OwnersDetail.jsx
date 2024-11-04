import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OwnersDetail({carDetail}) {

  const {user}=useUser();

  const navigation=useNavigate();

  const OnMessageOwnerButtonClick=async()=>{
    const userId=user.primaryEmailAddress.emailAddress.split('@')[0];
    const ownerUserId=carDetail?.createdBy.split('@')[0];
    // Create Current User ID
  try{
    await Service.CreateSendBirdUser(userId,user?.fullName,user?.imageUrl)
    .then(resp=>{
      console.log(resp);
    })
  }catch(e){}
    // Owners User ID
  try{
    await Service.CreateSendBirdUser(ownerUserId,carDetail?.userName,carDetail?.userImageUrl)
    .then(resp=>{
      console.log(resp);
    })
  }catch(e){}
    // Create Channel
    try{
      await Service.CreateSendBirdChannel([userId,ownerUserId],carDetail?.listingTitle)
      .then(resp=>{
        console.log(resp);
        console.log("Channel Created")
        navigation('/profile');
      })
    } catch(e){}
  }

  return (
    <div>
        {carDetail?.userName?
        <div className='p-10 border rounded-xl shadow-md mt-7'>
            <h2 className='font-medium text-2xl mb-3'>Owners Details</h2>
            <img src={carDetail?.userImageUrl} className='w-[70px] h-[70px] rounded-full'/>
            <h2 className='mt-2 font-bold text-xl text-left'>{carDetail?.userName}</h2>
            <h2 className='mt-2 font-bold text-gray-500 text-left'>{carDetail?.createdBy}</h2>
            <Button className='w-full mt-6'
            onClick={OnMessageOwnerButtonClick}>Message Owner</Button>
        </div>:
        <div className='w-full h-[320px] mt-7 bg-slate-200 animate-pulse rounded-xl'></div>}
    </div>
  )
}

export default OwnersDetail