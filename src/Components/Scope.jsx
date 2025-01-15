import React from "react";

const Scope = () => {
  return (
    <div className="py-[50px] h-auto">
      <div className="container">
        {/* Adjusted grid layout for better responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-[35%,65%] h-auto md:h-[90vh] gap-5">
          <div className="flex justify-center items-center text-white text-[28px] md:text-[40px] font-semibold text-shadow-lg">
            ขอบเขตโครงงาน
          </div>
          <div className="p-[20px] overflow-auto">
            <div className="space-y-5">
              {/* Repeated collapse items */}
              <div className="collapse bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">01</span>
                  &nbsp;การจัดการข้อมูลน้ำหนักตะกร้า
                </div>
              </div>

              <div className="collapse bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">02</span>
                  &nbsp;การจัดการข้อมูลเบี้ยเลี้ยง
                </div>
              </div>

              <div className="collapse bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">03</span>
                  &nbsp;การจัดการข้อมูลสินค้า
                </div>
              </div>

              <div className="collapse collapse-arrow bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">04</span>&nbsp;
                  การจัดการข้อมูลลูกค้า
                </div>
                <div className="collapse-content ml-[20px] bg-black text-white text-[18px] md:text-[20px] peer-checked:bg-black peer-checked:text-secondary-content">
                  <p>- ข้อมูลลูกค้า</p>
                  <p>- ข้อมูลสาขาลูกค้า</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">05</span>&nbsp;
                  การจัดการข้อมูลพนักงาน
                </div>
                <div className="collapse-content ml-[20px] bg-black text-white text-[18px] md:text-[20px] peer-checked:bg-black peer-checked:text-secondary-content">
                  <p>- ข้อมูลบริษัท</p>
                  <p>- ข้อมูลประเภทพนักงาน</p>
                  <p>- ข้อมูลพนักงาน</p>
                </div>
              </div>

              <div className="collapse bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">06</span>
                  &nbsp;การจัดการข้อมูลเส้นทาง
                </div>
              </div>

              <div className="collapse collapse-arrow bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">07</span>&nbsp;
                  จัดการข้อมูลรถ
                </div>
                <div className="collapse-content ml-[20px] bg-black text-white text-[18px] md:text-[20px] peer-checked:bg-black peer-checked:text-secondary-content">
                  <p>- ข้อมูลประเภทรถ</p>
                  <p>- ข้อมูลรถ</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">08</span>&nbsp;
                  จัดแผนเดินรถ
                </div>
                <div className="collapse-content ml-[20px] bg-black text-white text-[18px] md:text-[20px] peer-checked:bg-black peer-checked:text-secondary-content">
                  <p>- จัดแพลนเดินรถ</p>
                  <p>- ล้างข้อมูลแพลนเดินรถทั้งหมด</p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-black border-[2px]">
                <input type="checkbox" className="peer" />
                <div className="flex items-center collapse-title text-white text-[18px] md:text-[20px] font-semibold">
                  <span className="text-[25px] md:text-[30px]">09</span>&nbsp;
                  รายงาน
                </div>
                <div className="collapse-content ml-[20px] bg-black text-white text-[18px] md:text-[20px] peer-checked:bg-black peer-checked:text-secondary-content">
                  <p>- น้ำหนักตระกร้า</p>
                  <p>- เบี้ยเลี้ยง</p>
                  <p>- สินค้า</p>
                  <p>- ลูกค้า</p>
                  <p>- สาขา</p>
                  <p>- เส้นทาง</p>
                  <p>- รถ</p>
                  <p>- รายชื่อพนักงาน</p>
                  <p>- รายงานแพลนเดินรถ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
