import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const HomeCard = (props: HomeCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    maintext,
    subtext,
  } = props;
  return (
    <div
      id="glassui"
      className="flex items-center w-full p-2 rounded-md cursor-pointer shadow-nav"
    >
      <div>
        <ContentBox
          height="h-16"
          width="w-16"
          rounded="rounded-lg"
          file={file}
        />
      </div>
      <div className="flex flex-col justify-center flex-grow ml-3">
        <MyTypography
          fontWeight="font-medium"
          label={maintext}
          textColor="text-black"
          textSize="text-lg"
        />
        <MyTypography
          fontWeight="font-medium"
          label={subtext}
          textColor="text-darkcity"
          textSize="text-[0.87rem]"
        />
      </div>
    </div>
  );
};

export default HomeCard;
