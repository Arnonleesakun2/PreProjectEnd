import React from "react";

const Scope = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900">
      <div className="container">
        <div className="md:flex">
          <div className="p-[40px] md:w-[50%]">
            <div className="flex font-thai justify-center items-center text-white text-[28px] md:text-[40px] font-semibold text-shadow-lg">
              ขอบเขตโครงงาน
            </div>
            <div className="md:p-[20px] overflow-auto">
              <div className="space-y-2">
                {/* Repeated collapse items */}
                <div className="collapse  border-[2px] ">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px]15d:text-[20px] font-semibold">
                    <span className="text-[15px]">01</span>
                    &nbsp;การจัดการข้อมูลน้ำหนักตะกร้า
                  </div>
                </div>

                <div className="collapse  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">02</span>
                    &nbsp;การจัดการข้อมูลเบี้ยเลี้ยง
                  </div>
                </div>

                <div className="collapse  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">03</span>
                    &nbsp;การจัดการข้อมูลสินค้า
                  </div>
                </div>

                <div className="collapse collapse-arrow  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">04</span>&nbsp;
                    การจัดการข้อมูลลูกค้า
                  </div>
                  <div className="collapse-content ml-[20px]  text-white text-[18px] md:text-[20px]  peer-checked:text-secondary-content">
                    <p className="font-thai text-[15px]">- ข้อมูลลูกค้า</p>
                    <p className="font-thai text-[15px]">- ข้อมูลสาขาลูกค้า</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">05</span>&nbsp;
                    การจัดการข้อมูลพนักงาน
                  </div>
                  <div className="collapse-content ml-[20px]  text-white text-[18px] md:text-[20px] peer-checked:text-secondary-content">
                    <p className="font-thai text-[15px]">- ข้อมูลบริษัท</p>
                    <p className="font-thai text-[15px]">
                      - ข้อมูลประเภทพนักงาน
                    </p>
                    <p className="font-thai text-[15px]">- ข้อมูลพนักงาน</p>
                  </div>
                </div>

                <div className="collapse  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">06</span>
                    &nbsp;การจัดการข้อมูลเส้นทาง
                  </div>
                </div>

                <div className="collapse collapse-arrow  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">07</span>&nbsp; จัดการข้อมูลรถ
                  </div>
                  <div className="collapse-content ml-[20px]  text-white text-[18px] md:text-[20px]  peer-checked:text-secondary-content">
                    <p className="font-thai text-[15px]">- ข้อมูลประเภทรถ</p>
                    <p className="font-thai text-[15px]">- ข้อมูลรถ</p>
                  </div>
                </div>

                <div className="collapse collapse-arrow  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">08</span>&nbsp; จัดแผนเดินรถ
                  </div>
                  <div className="collapse-content ml-[20px]  text-white text-[18px] md:text-[20px]  peer-checked:text-secondary-content">
                    <p className="font-thai text-[15px]">- จัดแพลนเดินรถ</p>
                    <p className="font-thai text-[15px]">
                      - ล้างข้อมูลแพลนเดินรถทั้งหมด
                    </p>
                  </div>
                </div>

                <div className="collapse collapse-arrow  border-[2px]">
                  <input type="checkbox" className="peer" />
                  <div className="flex font-thai items-center collapse-title text-white text-[18px] md:text-[15px] font-semibold">
                    <span className="text-[15px]">09</span>&nbsp; รายงาน
                  </div>
                  <div className="collapse-content ml-[20px]  text-white text-[18px] md:text-[20px] peer-checked:text-secondary-content">
                    <p className="font-thai text-[15px]">- น้ำหนักตระกร้า</p>
                    <p className="font-thai text-[15px]">- เบี้ยเลี้ยง</p>
                    <p className="font-thai text-[15px]">- สินค้า</p>
                    <p className="font-thai text-[15px]">- ลูกค้า</p>
                    <p className="font-thai text-[15px]">- สาขา</p>
                    <p className="font-thai text-[15px]">- เส้นทาง</p>
                    <p className="font-thai text-[15px]">- รถ</p>
                    <p className="font-thai text-[15px]">- รายชื่อพนักงาน</p>
                    <p className="font-thai text-[15px]">- รายงานแพลนเดินรถ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[40px] md:w-[50%]">
            <div className="">
              <div className="text-white text-center text-[30px] sm:text-[35px] md:text-[40px] font-semibold text-shadow-lg">
                ประโยชน์ที่คาดว่าจะได้รับ
              </div>
              <div className="text-white space-y-[10px] mt-[30px] sm:mt-[40px]">
                <div className="flex font-thai p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[15px] font-medium cursor-pointer hover:scale-105 duration-700">
                  <span className="text-[15px] font-thai font-bold">1</span>
                  &nbsp;พนักงานสามารถทำงานในรูปแบบออนไลน์ได้
                </div>
                <div className="flex font-thai p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[15px] font-medium cursor-pointer hover:scale-105 duration-700">
                  <span className="text-[15px] font-bold">2</span>
                  &nbsp;สามารถจัดการรายชื่อพนักงานเข้าออกโดยอัตโนมัติ
                </div>
                <div className="flex font-thai p-[12px] sm:p-[15px] border-[2px] rounded-[15px] backdrop-blur-[20px] text-[18px] sm:text-[15px] font-medium cursor-pointer hover:scale-105 duration-700">
                  <span className="text-[15px] font-thai font-bold">3</span>
                  &nbsp;สามารถคำณวนน้ำหนักเนื้อสัตว์รวมกับน้ำหนักตะกร้า
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
