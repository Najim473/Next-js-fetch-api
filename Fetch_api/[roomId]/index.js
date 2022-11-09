import React from "react";
import RoomsList from "../../../components/Rooms/RoomsList";
import SingleRoomDetails from "../../../components/SingleRoom/SingleRoomDetails";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/roomData");
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        roomId: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.roomId;
  const res = await fetch(`http://localhost:3000/api/roomData`);
  const data = await res.json();
  const rooms = data;
  const singleRoom = data.find((singleData) => singleData.id.toString() === id);
  return {
    props: {
      rooms,
      singleRoom,
    },
  };
};
const RoomId = ({ singleRoom, rooms }) => {
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
export default RoomId;
