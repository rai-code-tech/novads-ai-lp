import { CheckBox, Text, Heading, Img } from ".";
import React from "react";

export default function SettingsSection() {
  return (
    <>
      {/* settings section */}
      <div className="relative h-[948px]">
        <div className="absolute bottom-[4%] right-[3%] m-auto flex h-[92px] w-[10%] items-start justify-center bg-[url(/images/img_group_20.svg)] bg-cover bg-no-repeat py-1.5 md:h-auto">
          <div className="mb-1.5 flex w-full flex-col items-end gap-9">
            <Img
              src="img_settings.svg"
              width={18}
              height={22}
              alt="Settings"
              className="mr-4 h-[22px] md:mr-0"
            />
            <Img
              src="img_settings.svg"
              width={20}
              height={12}
              alt="Settings"
              className="h-[12px]"
            />
          </div>
        </div>
        <Img
          src="img_settings.svg"
          width={52}
          height={8}
          alt="Settings"
          className="absolute bottom-[19.71px] right-[13.00px] m-auto h-[8px] w-[4%]"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-gray-900 py-[66px] md:py-5">
          <div className="container-xs mb-[22px] flex justify-center md:p-5">
            <div className="flex w-full flex-col gap-[46px]">
              <div className="mx-[22px] flex items-start md:mx-0 md:flex-col">
                <Img
                  src="img_television.svg"
                  width={58}
                  height={60}
                  alt="Television Image"
                  className="h-[60px] w-[5%] md:w-full"
                />
                <div className="mt-[22px] flex flex-1 items-center px-14 md:flex-col md:self-stretch md:px-5">
                  <div className="flex flex-1 flex-col items-end gap-2.5 pl-14 pr-[102px] md:self-stretch md:px-5">
                    <div className="flex w-[94%] flex-col items-end md:w-full">
                      <div className="mr-56 h-[76px] w-[38%] bg-deep_purple-600 md:mr-0" />
                      <Heading
                        size="heading2xl"
                        as="h2"
                        className="relative mt-[-74px] bg-gradient2 bg-clip-text !text-transparent"
                      >
                        <span className="bg-gradient2 bg-clip-text text-transparent">
                          Imagine,&nbsp;
                        </span>
                        <span className="text-white-a700">write, admire.</span>
                      </Heading>
                    </div>
                    <Text
                      as="p"
                      className="mr-2 self-stretch text-center leading-7 md:mr-0"
                    >
                      Discover a Seamless Experience with Novads.AI - Boosting
                      Productivity, Efficiency, and Collaboration in Every
                      Click.
                    </Text>
                  </div>
                  <Img
                    src="img_mobile.svg"
                    width={98}
                    height={50}
                    alt="Mobile Image"
                    className="h-[50px] w-[10%] self-end md:w-full md:self-auto"
                  />
                </div>
              </div>
              <div className="relative h-[578px] content-center md:h-auto">
                <div className="mx-auto flex flex-1 flex-col items-start">
                  <div className="relative z-[5] ml-[360px] flex w-[26%] justify-center rounded-[20px] bg-white-a700_19 px-3.5 py-4 md:ml-0 md:w-full">
                    <div className="flex w-full justify-between gap-5">
                      <div className="flex flex-col items-center gap-2.5">
                        <Heading
                          size="headingxs"
                          as="h3"
                          className="!text-[9.93px]"
                        >
                          80
                        </Heading>
                        <Heading
                          size="headingxs"
                          as="h4"
                          className="!text-[9.93px]"
                        >
                          60
                        </Heading>
                        <Heading
                          size="headingxs"
                          as="h5"
                          className="!text-[9.93px]"
                        >
                          40
                        </Heading>
                        <Heading
                          size="headingxs"
                          as="h6"
                          className="!text-[9.93px]"
                        >
                          20
                        </Heading>
                        <Heading
                          size="headingxs"
                          as="p"
                          className="!text-[9.93px]"
                        >
                          0
                        </Heading>
                      </div>
                      <div className="relative h-[110px] flex-1">
                        <div className="absolute bottom-[-0.41px] left-[0.00px] my-auto ml-auto mr-4 h-[82px] flex-1 bg-[url(/images/img_group_15.png)] bg-cover bg-no-repeat md:mr-0 md:h-auto">
                          <Img
                            src="img_path.png"
                            width={166}
                            height={68}
                            alt="Path Image"
                            className="mt-3.5 h-[68px] w-full object-cover md:h-auto"
                          />
                        </div>
                        <Img
                          src="img_path_72x104.png"
                          width={104}
                          height={72}
                          alt="Path Large Image"
                          className="absolute right-[-0.21px] top-[0.00px] m-auto h-[72px] w-[56%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-[-148px] flex flex-col items-start self-stretch">
                    <div className="relative z-[4] ml-4 h-[296px] w-[26%] content-end rounded-[20px] bg-white-a700_19 px-6 py-4 md:ml-0 md:h-auto sm:px-5">
                      <Img
                        src="img_path_96x242.png"
                        width={242}
                        height={96}
                        alt="Path Tall Image"
                        className="absolute bottom-[13%] left-0 right-0 m-auto h-[96px] w-[86%] object-cover"
                      />
                      <Img
                        src="img_path_156x240.png"
                        width={240}
                        height={156}
                        alt="Path Wide Image"
                        className="mb-5 ml-auto mr-3 h-[156px] flex-1 object-cover md:mr-0"
                      />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-end justify-between gap-5">
                        <div className="w-[64%] self-center">
                          <div className="flex flex-col items-start gap-1.5">
                            <Heading as="p" className="!text-[11.99px]">
                              100
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              90
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              80
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              70
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              60
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              50
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              40
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              30
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              20
                            </Heading>
                            <Heading as="p" className="!text-[11.99px]">
                              10
                            </Heading>
                            <div className="flex flex-wrap items-end justify-between gap-5 self-stretch">
                              <Heading
                                as="p"
                                className="mb-3.5 ml-1.5 self-start !text-[11.99px]"
                              >
                                0
                              </Heading>
                              <Heading as="p" className="!text-[11.99px]">
                                01
                              </Heading>
                              <Heading as="p" className="!text-[11.99px]">
                                02
                              </Heading>
                              <Heading as="p" className="!text-[11.99px]">
                                03
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <Heading as="p" className="!text-[11.99px]">
                          04
                        </Heading>
                        <Heading as="p" className="mr-2 !text-[11.99px]">
                          05
                        </Heading>
                      </div>
                    </div>
                    <div className="relative mt-[-266px] flex w-[48%] flex-col items-end gap-7 rounded-[30px] border border-solid border-white-a700_4c bg-white-a700_19 px-[18px] py-[34px] md:w-full sm:py-5">
                      <div className="mt-24 h-[134px] w-[40%] rounded-[20px] bg-white-a700_19" />
                      <div className="mr-3.5 flex flex-col items-start self-stretch md:mr-0">
                        <Heading size="headinglg" as="h3">
                          Optimize Performance
                        </Heading>
                        <Text
                          as="p"
                          className="mt-1.5 w-[84%] leading-7 md:w-full"
                        >
                          <>
                            Take your ads performance to the next level with
                            conversion
                            <br />
                            optimized visuals
                          </>
                        </Text>
                        <div className="mt-3 flex flex-col items-start gap-4 self-stretch">
                          <CheckBox
                            name="Checkmark Item"
                            label="Trained data on most viral content"
                            id="CheckmarkItem"
                            className="gap-1.5 text-[18px] font-bold text-white-a700"
                          />
                          <CheckBox
                            name="Fine Tuning Checkbox"
                            label="Fine tuning over time"
                            id="FineTuningCheckbox"
                            className="gap-1.5 text-[18px] font-bold text-white-a700"
                          />
                          <CheckBox
                            name="Competitor Checkbox"
                            label="Be one step ahead of your competitoes"
                            id="CompetitorCheckbox"
                            className="gap-1.5 text-[18px] font-bold text-white-a700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="img_path_104x148.png"
                  width={148}
                  height={104}
                  alt="Path Extra Large Image"
                  className="absolute left-[17%] top-[21%] z-[6] m-auto h-[104px] w-[12%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[9%] left-0 right-0 z-[7] mx-[98px] my-auto flex-1 md:mx-0">
          <div className="flex flex-col items-end">
            <Img
              src="img_rectangle_15.png"
              width={568}
              height={306}
              alt="Feature Image"
              className="relative z-[8] mr-5 h-[306px] w-[46%] rounded-[20px] object-cover md:mr-0"
            />
            <div className="relative mt-[-270px] flex w-[48%] justify-center rounded-[30px] border border-solid border-white-a700_4c bg-white-a700_19 px-8 py-[34px] md:w-full sm:p-5">
              <div className="mt-[260px] flex w-full flex-col items-start">
                <Heading size="headinglg" as="h3">
                  AI-Powered Insights
                </Heading>
                <Text as="p" className="mt-1 w-[84%] leading-7 md:w-full">
                  Our AI analyzes your brand and remembers it to produce a
                  tailor-made experience
                </Text>
                <div className="mt-3 flex flex-col items-start gap-4 self-stretch">
                  <CheckBox
                    name="Data Checkbox"
                    label="Data-Driven Generation"
                    id="DataCheckbox"
                    className="gap-1.5 text-[18px] font-bold text-white-a700"
                  />
                  <CheckBox
                    name="Brand Checkbox"
                    label="In-depth Brand Understanding"
                    id="BrandCheckbox"
                    className="gap-1.5 text-[18px] font-bold text-white-a700"
                  />
                  <CheckBox
                    name="Experience Checkbox"
                    label="Personalized Experience"
                    id="ExperienceCheckbox"
                    className="gap-1.5 text-[18px] font-bold text-white-a700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
