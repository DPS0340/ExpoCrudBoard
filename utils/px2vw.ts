const px2vw = (size: number, width = 1024) => `${(size / width) * 100}vw`;

export default px2vw;
