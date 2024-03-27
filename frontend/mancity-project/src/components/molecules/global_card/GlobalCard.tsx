import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const GlobalCard = (props: GlobalCardProps) => {
  const { subTitle, mainTitle, file } = props;
  return (
    <div id="glassui" className="flex-shrink-0 w-36 h-42 mr-2 rounded-lg">
      <div>
        <ContentBox file={file} rounded="rounded-t-[20px]" />
      </div>
      <div className="mx-2 my-1">
        <div className="my-1 whitespace-nowrap overflow-hidden overflow-ellipsis mr-2">
          <Typography label={subTitle} textSize="text-sm" />
        </div>
        <div className="mt-1">
          <Typography
            label={mainTitle}
            textSize="text-lg"
            fontWeight="font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalCard;
