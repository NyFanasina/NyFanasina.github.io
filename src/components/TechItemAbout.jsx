import { Tooltip } from "flowbite-react";

export default function TechItemAbout({ title, children }) {
    return (
        <div className="flex flex-col items-center font-Raleway">
            <h3>{title}</h3>
            <div className="flex space-x-2">
                {children.map((child, i) => (
                    <Tooltip key={i} content={child.props.tooltip} placement="bottom">
                        {child}
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}
