import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree}                from "./palette";
import Listings                     from "@/app/auctions/Listings";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Listings">
                <Listings/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;