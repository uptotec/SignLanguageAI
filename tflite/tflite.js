import Tflite from 'tflite-react-native';

let tflite = new Tflite();

tflite.loadModel(
  {
    model: 'model.tflite',
    labels: 'labels.txt',
    numThreads: 1,
  },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  },
);

const predict = (imagePath, perdition, setPrediction, setAccuracy) => {
  tflite.runModelOnImage(
    {
      path: imagePath,
      imageMean: 0,
      imageStd: 255,
      numResults: 3,
      threshold: 0.1,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);

        const results = res[0].label;

        setAccuracy(res[0].confidence * 100);

        switch (results) {
          case 'space':
            setPrediction(perdition + ' ');
            break;
          case 'del':
            setPrediction(perdition.slice(0, -1));
            break;
          case 'nothing':
            break;
          default:
            setPrediction(perdition + res[0].label);
        }
      }
    },
  );
};

export default predict;
