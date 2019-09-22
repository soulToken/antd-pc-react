import React from "react";
import PropTypes from "prop-types";
import "./style.less"; //已启用 CSS Modules

const SvgIcon = props => {
const { iconClass, fill ,style} = props;

return (
<i aria-hidden="true" className="anticon">
<svg style={ style }>
<use xlinkHref={"#icon-" + iconClass} fill={fill} />
</svg>
</i>
);};

SvgIcon.propTypes = {
// svg名字
iconClass: PropTypes.string.isRequired,
// 填充颜色
fill: PropTypes.string,
style:PropTypes.object.isRequired
};

SvgIcon.defaultProps = {
fill: "currentColor"};

export default SvgIcon;