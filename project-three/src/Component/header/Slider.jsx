import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends React.Component {
    render() {
        const images = [
            { url: "https://cdn.dribbble.com/users/59947/screenshots/9553542/media/160e86cdc1d91877e4031b47b13de97c.jpg" },
            { url: "https://www.creativeboom.com/uploads/articles/41/41a7d04df4d17ad01d8d23a7b1b576ec2a69e632_1100.jpg" },
            { url: "https://cdn.dribbble.com/users/2390791/screenshots/6889596/1_3_.jpg" }
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={630}
                    height={450}
                    images={images}
                />
            </div>
        );
    }
}

export default Slider
