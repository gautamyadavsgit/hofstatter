import Christian from "@/assets/images/Doctors/Dr. Christian Pickem.jpg";
import Kriszt from "@/assets/images/Doctors/Dr. Christiane Kriszt.jpg";
import Billensteiner from "@/assets/images/Doctors/Dr. Claudia Billensteiner.jpg";
import Saleta from "@/assets/images/Doctors/Dr. Julia Saleta.jpeg";
export default {
  state() {
    return {
      DoctorsData: [
        {
          id: 1,
          name: "Dr. Christian Pickem",
          img: Christian,
          color: "bg-[#DAF8F480]",
        },
        {
          id: 2,
          name: "Dr. Christiane Kriszt",
          img: Kriszt,
          color: "bg-[#FFDFDF80]",
        },
        {
          id: "3",
          name: "Dr. Claudia Billensteiner",
          img: Billensteiner,
          color: "bg-[#FFF3D780]",
        },
        {
          id: "4",
          name: "Dr. Julia Saleta",
          img: Saleta,
          color: "bg-[#E7E7FF80]",
        },
      ],
    };
  },
};
