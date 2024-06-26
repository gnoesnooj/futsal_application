import ContentBox from "@/components/atoms/content_box/ContentBox";
import SubButton from "@/components/atoms/sub_button/SubButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const WideCard = (props: WideCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    subtext,
    maintext,
    minitext,
    buttonlabel,
  } = props;
  return (
      <div id="glassui" className="flex p-2 m-3 rounded-md shadow-nav">
        <div className="my-1 mr-3">
          <ContentBox
            height="h-20"
            width="w-20"
            rounded="rounded-lg"
            file={file}
          />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <MyTypography
              fontWeight="font-medium"
              label={subtext}
              textColor="text-black"
              textSize="text-lg"
            />
            <MyTypography
              fontWeight="font-medium"
              label={maintext}
              textColor="text-black"
              textSize="text-xl"
            />
          </div>
          <div>
            <MyTypography
              fontWeight="font-medium"
              label={minitext}
              textSize="text-sm"
              textColor="text-sofcity"
            />
          </div>
        </div>
        <div className="inline-block mt-auto ml-auto">
          <SubButton label={buttonlabel} hover={false} />
        </div>
      </div>
  );
};

export default WideCard;
