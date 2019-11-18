import * as React from "react";
import Loading from "./Loading";

export default class ServerCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [], loadingState: "LOADING" };
    this.renderImages = this.renderImages.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  async componentDidMount() {
    try {
      let response = await fetch("https://picsum.photos/list");
      let result = await response.json();
      await this.sleep(2000);
      this.setState({
        images: this.getRandomImages(result, 50),
        loadingState: "DONE"
      });
    } catch (error) {
      this.setState({ error, loadingState: "ERROR" });
    }
  }

  getRandomImages(imageList, numberOfImages) {
    let newArray = [];
    for (let i = 0; i < numberOfImages; i++) {
      let rand = imageList[Math.floor(Math.random() * imageList.length)];
      newArray.push(rand);
    }
    return newArray;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  renderImages() {
    return this.state.images.map(this.renderImage);
  }

  renderImage(image) {
    let src = "https://picsum.photos/200/300?image=" + image.id;
    return <img src={src} key={image.id} style={{ margin: "8px" }} />;
  }

  renderChild() {
    switch (this.state.loadingState) {
      case "LOADING":
        return <Loading />;
      case "DONE":
        return this.renderImages();
      case "ERROR":
        return <div>Error: {this.state.error}</div>;
      default:
        return <Loading />;
    }
  }

  render() {
    return <div>{this.renderChild()}</div>;
  }
}
