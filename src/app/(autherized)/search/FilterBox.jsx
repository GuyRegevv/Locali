import { UIButton } from "@/components/ui/UIButton";

export const FilterBox = (props) => {
    return (
        <div className="h-30">
            <p className="py-2 font-bold">{props.title}</p>
            <div className="h-20">
                <UIButton 
                    label={props.value}
                    onClick={props.onClick}
                    className="w-full h-5/6 border-4">
                </UIButton>
            </div>
        </div>

    );
};