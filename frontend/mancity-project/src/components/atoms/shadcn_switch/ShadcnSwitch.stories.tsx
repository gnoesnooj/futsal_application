import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Source } from "@storybook/addon-docs";
import ShadcnSwitch from "@/components/atoms/shadcn_switch/ShadcnSwitch";

const meta: Meta<typeof ShadcnSwitch> = {
  title: "Components/atoms/ShadcnSwitch",
  tags: ["autodocs"],
  component: ShadcnSwitch,
  parameters: {
    docs: {
      page: () => (
        <>
          <h2>ShadcnSwitch 사용 예시</h2>
          <Source
            language="tsx"
            code={`  
// isSwitchOn의 값이 true인지, false인지로 사용합니다.
const [isSwitchOn, setIsSwitchOn] = useState(false);
const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);


<ShadcnSwitch checked={isSwitchOn} onCheckedChange={toggleSwitch} />
            `}
          />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShadcnSwitch>;

export const Default: Story = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckedChange = () => {
    setChecked(!checked);
    action("onCheckedChange")(!checked);
  };

  return (
    <ShadcnSwitch checked={checked} onCheckedChange={handleCheckedChange} />
  );
};

Default.args = {
  checked: false,
};
