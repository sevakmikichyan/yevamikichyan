import React from "react";
import { Paragraph } from "@/common/components/typography";
import { Props } from "./type";
import { applyAccentColor } from "@/common/utils/colors";
import classNames from "classnames";

const Radio: React.FC<Props> = ({
  label,
  checked,
  name,
  onChange,
  color = "primary",
}) => {
  const appliedAccentColor = applyAccentColor(color);

  return (
    <Paragraph size="lg">
      <label
        className="flex items-center gap-md cursor-pointer select-none"
      >
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          className={classNames(
            "w-5 h-5 md:w-6 md:h-6",
            "transition-transform duration-150 ease-out",
            "hover:scale-110 active:scale-95 cursor-pointer",
            appliedAccentColor
          )}
        />
        <span className="leading-none">
          {label}
        </span>
      </label>
    </Paragraph>
  );
};

export default Radio;
