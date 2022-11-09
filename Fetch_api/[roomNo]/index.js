import React from "react";
import RoomsList from "../../../components/Rooms/RoomsList";
import SingleRoomDetails from "../../../components/SingleRoom/SingleRoomDetails";
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/room`);
  console.log(res)
  const data = await res.json();
  const paths = data.data.data.map((curElem) => {
    return {
      params: {
        roomNo: curElem.Room_Number.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const Room_Number = context.params.roomNo;
  const res = await fetch(`${process.env.API_URL}/api/room`);
  const data = await res.json();
  const rooms = data?.data?.data;
  const singleRoom = rooms.find((singleData) => singleData?.Room_Number?.toString() === Room_Number.toString());
  return {
    props: {
      rooms,
      singleRoom,
    },
  };
};
const RoomNo = ({ singleRoom, rooms }) => {
  const roomsSlice = rooms.slice(0, 3);
  return (
    <div className="p-container">
      <SingleRoomDetails room={singleRoom} />
      <div style={{ marginBottom: '50px' }}>
        <RoomsList rooms={roomsSlice} />
      </div>
    </div>
  );
};
export default RoomNo;
