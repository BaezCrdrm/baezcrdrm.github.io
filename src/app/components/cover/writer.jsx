import Text from "./text";
import Prompt from "./prompt";

const Writer = () => {
    return (
        <div className="flex items-center gap-1 px-4 md:px-2">
            <Text />
            <Prompt />
        </div>
    )
}

export default Writer;
