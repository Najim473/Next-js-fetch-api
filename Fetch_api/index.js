import React from "react";
import RoomsList from "../../components/Rooms/RoomsList";
import RoomHeader from "../../components/Rooms/RoomHeader";
const Rooms = ({ rooms }) => {
  return (
    <div className="p-container">
      <RoomHeader />
      <RoomsList rooms={rooms} />
    </div>
  );
};
export default Rooms;
export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/room`, {
    accept: "application/json",
  });
  const roomData = await res.json();
  if (roomData.status !== 'success') {
    const message = `An error occured: ${roomData.message}`;
    // throw new Error(message);
  }
  const rooms = roomData?.data?.data;
  return {
    props: { rooms: rooms },
    // props: {
    // rooms
    // }
  };
}
