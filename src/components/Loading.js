// libraries
import Skeleton from "@yisheng90/react-loading";

function loadingSkeletons() {
  let temp = [];
  for (var i = 0; i < 10; i++) {
    temp.push(
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 py-3' key={i}>
        <Skeleton
          width='100%'
          color='rgba(255,255,255,0.3)'
          rows={12}
          translucent={true}
          height={30}
        />
      </div>,
    );
  }

  return temp;
}

const Loading = () => {
  return <div className='m-0 row'>{loadingSkeletons()}</div>;
};

export default Loading;
