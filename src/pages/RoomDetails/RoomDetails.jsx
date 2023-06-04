import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";
import Container from "../../components/Share/Container";

const RoomDetails = () => {
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <div>
                        <Header></Header>
                    </div>
                    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-7 md:gap-10 mt-6">
                        <RoomInfo></RoomInfo>
                        <div className="mb-10 md:col-span-3 order-first md:order-last">
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;