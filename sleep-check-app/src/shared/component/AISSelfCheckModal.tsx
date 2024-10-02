import React from "react";

function AISSelfCheckModal(props: {
  showModal: boolean;
  setShowModal: any;
  score: number;
  scoreReview: string;
}) {
  // const [showModal, setShowModal] = useState(props.showFlag);
  const handleCloseModal = () => {
    props.setShowModal(false);
  };
  //Modal
  return (
    <>
      {props.showModal ? (
        <>
          <div>
            <div className="">
              <div className="flex justify-center items-center">
                <h3 className="z-20">
                  あなたの不眠度は、{props.score}点です。
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <span>{props.scoreReview}</span>
              </div>
              <div className="flex justify-center items-right">
              <button type="button" className="z-20" onClick={handleCloseModal}>
                閉じる
              </button>
            </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
//Modal
  // return (
  //   <>
  //     {props.showModal ? (
  //       <>
  //         <div>
  //           <div className="modalCard top-1/2 left-1/2 inset-0 z-10 absolute h-64 w-64 bg-slate-400">
  //             <div className="flex justify-center items-center">
  //               <h3 className="z-20">
  //                 あなたの不眠度は、{props.score}点です。
  //               </h3>
  //             </div>
  //             <div className="flex justify-center items-center">
  //               <span>{props.scoreReview}</span>
  //             </div>
  //             <div className="flex justify-center items-right">
  //             <button type="button" className="z-20" onClick={handleCloseModal}>
  //               閉じる
  //             </button>
  //           </div>
  //           </div>
  //         </div>
  //       </>
  //     ) : (
  //       <></>
  //     )}
  //   </>
  // );
}

export default AISSelfCheckModal;
