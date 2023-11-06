import React from "react";
import {AiFillPlaySquare} from 'react-icons/ai';
export default function Dashboard() {
  return (
    <>
      <div className="content">
        <main>
          <div className="report">
            <div className="report-item">
              <div className="report-icon">
                <AiFillPlaySquare />
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>

            <div className="report-item">
              <div className="report-icon">
                <AiFillPlaySquare />
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>
            <div className="report-item">
              <div className="report-icon">
                <AiFillPlaySquare />
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
