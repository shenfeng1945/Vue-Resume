(function (window) {
  var svgSprite = '<svg><symbol id="icon-tools" viewBox="0 0 1024 1024"><path d="M941.795468 218.683605c33.553538 80.938404 17.562701 177.528276-48.245747 243.349377-72.469421 72.432683-181.976881 83.777055-267.086698 35.738969l-61.53597 67.237357 43.902658 44.075845 26.241716-26.240641c13.394604-13.46057 35.160195-13.46057 48.551729 0l212.79808 214.908628c13.426327 13.390985 13.426327 35.190477 0 48.581462l-97.140298 97.102548c-13.394604 13.462616-35.156102 13.462616-48.551729 0L537.9342 728.530568c-13.427351-13.393032-13.427351-35.192523 0-48.583508l23.951463-23.917736-41.855962-41.955554-294.284221 321.502341c-26.855725 26.790156-70.31732 26.790156-97.139274 0l-24.292238-24.323988c-26.820931-26.786063-26.820931-70.314439 0-97.102548l335.25294-280.776801L216.894542 310.112943l-70.316297-0.034792L65.259933 179.221848l65.499397-65.599044 133.834491 81.896218 0.888266 68.843948 225.266553 226.094388 65.534191-54.852282c-64.065686-87.329974-57.368896-210.327286 21.557852-289.286616 65.501444-65.460898 161.545735-81.725326 242.284833-48.78817L675.766912 239.832274l121.430489 121.42756L941.795468 218.683605zM184.914913 848.387353c-13.39358-13.395078-35.159172-13.395078-48.552752 0-13.428374 13.390985-13.428374 35.119869 0 48.581462 13.392557 13.395078 35.159172 13.395078 48.552752 0C198.341241 883.507222 198.341241 861.778338 184.914913 848.387353z"  ></path></symbol><symbol id="icon-icongithub" viewBox="0 0 1032 1024"><path d="M0 515.872C0 741.12 144.352 932.64 345.584 1002.976c27.12 6.896 22.896-12.544 22.896-25.616l0-89.424c-156.464 18.304-162.736-85.28-173.296-102.608-21.312-36.272-71.392-45.488-56.432-62.752 35.696-18.432 71.968 4.608 114 66.784 30.464 45.072 89.664 37.504 119.936 29.936 6.624-27.056 20.704-51.2 39.952-70.08-161.888-28.816-229.552-127.792-229.552-245.44 0-56.944 18.8-109.504 55.808-151.856-23.408-69.888 2.256-129.472 5.616-138.416 66.928-6.08 136.512 47.872 141.872 52.128 38.128-10.192 81.52-15.76 130.064-15.76 48.848 0 92.48 5.632 130.784 15.952 13.072-9.952 77.584-56.192 139.824-50.544 3.312 8.848 28.416 67.168 6.4 136.016 37.376 42.464 56.352 95.264 56.352 152.48 0 117.888-67.952 217.008-230.528 245.6 27.152 26.736 43.984 63.92 43.984 105.04l0 129.712c0.864 10.336 0 20.736 17.36 20.736 204.112-68.752 351.12-261.712 351.12-489.008C1031.744 230.96 800.784 0 515.872 0 230.96 0 0 230.96 0 515.872L0 515.872zM0 515.872"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M575.660998 241.808021c5.313-20.025999 20.844999-24.930999 24.521999-8.174l4.087 21.251999c4.087 18.391 12.262 8.583 12.262-14.713-0.409-17.574-2.044-22.887999-9.81-29.017999-11.856-9.809-25.747999-9.809-34.334999-0.409-9.805 10.626-15.936 29.834999-13.074 40.869999C562.582999 265.10402 570.344998 261.01702 575.660998 241.808021z"  ></path><path d="M962.283988 624.332011c-9.805-40.457999-41.679999-106.262997-67.022998-140.180996-17.57-23.295999-17.979-23.295999-13.892-44.957999 4.904-27.791999-1.631-60.895998-17.574-86.235998-9.809-15.121-13.078-26.564999-16.349-54.764999C832.324991 164.956023 738.732994 52.972026 608.356997 11.285027 570.344998-0.959973 490.652001-3.820973 448.964002 5.579027 303.876006 37.867026 202.518008 157.207023 190.666009 308.426019c-1.226 18.8-4.086 33.921999-6.13 33.921999-6.131 0-19.617999 26.156999-19.617999 38.008999 0 6.13-2.86 15.939-6.539 21.251999-4.904 7.766-6.13 17.166-4.904 39.644999l1.635 29.833999-25.747999 33.922999c-62.939998 82.557998-87.461998 170.428995-68.661998 243.993994 8.583 32.282999 13.896 37.600999 30.651999 30.651999 13.079-5.313 46.999999-40.460999 54.356999-56.399999 4.495-9.809 11.035-12.262 11.035-4.087 0 9.8 24.930999 58.030998 43.322999 84.190998 10.217 14.305 17.982 26.564999 17.165 26.974999-0.409 0.817-8.583 5.317-17.574 9.809-33.513999 17.165-48.226999 42.095999-48.634999 84.601998-0.41 14.713 2.043 24.108999 7.765 32.282999 4.496 6.543 10.218 15.117 12.67 19.203999 14.305 24.521999 40.460999 36.783999 95.226997 44.956999 40.869999 5.722 69.070998 3.274 149.583996-12.669 81.331998-15.94 115.249997-15.94 199.854995 0.813 119.744997 23.708999 192.497995 15.936 230.915994-24.520999 28.608999-31.064999 37.190999-56.403999 27.373999-80.509998-3.27-7.36-4.896-14.722-3.674-15.535 0.821-1.23-1.222-7.761-4.499-14.717-7.763-14.304-27.375999-30.238999-48.631999-39.238999l-14.718-6.131 21.668999-31.873999c11.845-17.583 26.564999-44.956999 33.104999-61.305998l11.443-29.429999 15.122 23.299999c15.938 24.521999 38.009999 47.408999 49.855999 51.495999 17.17 6.13 31.474999-29.426999 34.739999-85.014998C970.456988 666.43201 969.239988 651.71901 962.283988 624.332011zM552.777999 181.729022c15.522-32.286999 47.812999-44.956999 72.335998-29.016999 17.983 11.852 31.061999 40.052999 33.513999 70.704998 6.544 94.817997-67.022998 139.366996-106.262997 64.165998C538.878999 262.65202 539.286999 208.704022 552.777999 181.729022zM397.060003 159.660023c13.487-11.444 41.278999-12.67 56.399999-2.861 18.392 12.261 31.469999 40.052999 33.513999 72.748998 2.044 36.782999-4.087 60.078998-22.068999 79.695998-16.348 18.392-33.104999 23.295999-51.904999 15.122-29.426999-12.67-44.957999-42.504999-44.957999-88.278998C368.042004 201.756022 377.851004 176.008023 397.060003 159.660023zM446.512002 348.479018c44.139999-8.583 138.548996-5.313 183.505995 5.722 53.130999 13.487 111.166997 43.321999 111.166997 57.625998 0 7.766-35.970999 30.651999-58.035998 36.782999-13.079 4.087-12.674 2.861 4.087-19.616999 14.718-19.617999 8.587-20.026999-16.349-1.227-90.729998 68.252998-200.261995 69.887998-288.540992 3.678-12.261-8.992-22.887999-15.53-23.704999-14.304-1.226 0.817 2.044 8.583 6.948 16.756 4.904 8.175 7.766 15.94 6.539 17.166-2.86 2.861-36.782999-11.852-51.903999-22.886999-6.948-4.904-12.261-12.261-12.261-16.757C307.963005 394.254017 382.347003 360.740018 446.512002 348.479018zM600.183998 518.090013c-6.539 1.631-22.478999 2.861-34.738999 2.861l-22.478999 0 24.521999-2.861c13.486-1.635 29.017999-2.86 34.737999-2.86C611.213997 514.820014 610.809997 515.229014 600.183998 518.090013zM540.921999 522.995013c0 6.13-80.513998 1.626-125.061997-6.948-35.148999-6.541-71.114998-17.575-76.835998-22.887999-6.54-5.722 2.044-4.495 26.974999 4.087 33.920999 11.852 93.999998 20.843999 136.914996 20.843999C528.661 518.090013 540.921999 519.721013 540.921999 522.995013zM304.693006 979.930001c-67.435998 0-119.339997-18.809-132.418996-47.417999-4.496-9.399-3.678-13.486 5.722-30.650999 9.809-18.801 10.217-20.018999 2.861-22.062999-10.217-3.273-5.722-11.035 12.67-24.520999 16.757-11.452 33.512999-13.087 41.278999-3.687 3.269 3.678 12.261 11.034 20.025999 15.939 7.766 5.313 21.661999 16.348 31.061999 24.930999 8.991 8.991 29.833999 26.564999 45.772999 39.643999 21.252999 17.166 29.426999 26.564999 29.426999 33.103999C361.094004 977.470001 352.920004 979.930001 304.693006 979.930001zM826.193992 850.772005c22.891999 11.852 31.878999 31.068999 14.305 31.068999-5.717 0-5.717 1.227 0.818 8.173 4.087 4.496 8.173 16.758 9.399 27.791999 1.631 18.393 0.817 20.434999-13.078 32.695999-22.887999 20.020999-53.130999 27.382999-111.983997 26.564999-37.591999 0-52.309999-1.63-56.395999-6.131-8.587-8.174 1.223-20.020999 30.238999-36.369999 36.369999-20.846999 50.675999-31.881999 55.587999-41.281999 2.456-4.905 10.217-10.217 17.162-12.261 8.173-2.044 16.756-8.992 24.112999-19.616999C809.028992 843.007005 810.663992 842.599005 826.193992 850.772005zM812.707992 716.301008c-32.695999 126.280997-145.088996 215.381994-279.959993 221.511994-94.817997 4.501-172.471995-24.520999-237.045994-88.683998-49.043999-49.043999-77.243998-107.079997-83.782998-174.113995-2.861-31.465999 3.27-84.596998 12.67-107.074997l5.721-13.491 17.166 10.635c9.809 5.729 19.616999 11.859 22.478999 13.494 3.27 2.044 2.452 16.349-3.27 55.991999-9.809 65.801998-7.765 91.139998 9.4 110.349997 15.531 17.979 42.504999 27.791999 76.426998 28.195999 56.400999 0.813 61.714998-6.543 61.714998-85.827998l0-51.899999 33.920999 3.671c123.427997 13.078 242.359994-11.844 329.416991-69.888998 12.262-8.173 23.699999-13.078 25.334999-11.447C818.020992 572.840012 823.741992 672.158009 812.707992 716.301008z"  ></path><path d="M435.478002 270.82602c12.669 8.583 18.392 7.766 29.833999-4.086 7.766-7.357 10.217-14.305 10.217-28.608999 0-30.652999-25.747999-49.452999-42.503999-31.061999C417.085003 224.643021 418.312002 258.56502 435.478002 270.82602zM456.729001 220.964021c2.452 0.817 4.496 5.722 4.496 11.443 0 11.444-11.852 15.531-15.94 5.313C442.425002 229.956021 449.782002 218.513021 456.729001 220.964021z"  ></path></symbol><symbol id="icon-1" viewBox="0 0 1024 1024"><path d="M892.500549 782.759657 142.443711 782.759657c-14.794961 0-26.787086-11.727089-26.787086-26.154683L115.656625 194.355523c0-14.403035 11.992125-26.1291 26.787086-26.1291L892.500549 168.226422c14.795984 0 26.787086 11.726066 26.787086 26.1291L919.287635 756.604974C919.287635 771.032568 907.296533 782.759657 892.500549 782.759657zM505.089102 516.675486c10.457166 10.212596 27.420513 10.212596 37.877679 0l330.156442-322.319963L174.943916 194.355523 505.089102 516.675486zM624.758622 473.812259c31.022551 23.520693 203.908086 154.479327 267.741927 202.825428L892.500549 212.45167C834.173119 269.39559 708.467115 392.101259 624.758622 473.812259zM142.443711 743.529167c0 7.213285 6.001691 13.075807 13.387915 13.075807l723.270774 0c7.396457 0 13.398148-5.862521 13.398148-13.075807l0-34.230616L605.912391 492.208235c-37.554314 36.643572-62.946634 61.446467-62.946634 61.446467-10.457166 10.213619-27.420513 10.213619-37.877679 0l-68.668962-67.043952-293.975405 222.686778L142.443711 743.529167zM142.443711 676.637688c64.053851-48.530296 223.817532-169.551604 275.128151-208.388121L144.198681 201.348798c-1.016143 1.86958-1.753947 3.854794-1.753947 6.082532L142.444734 676.637688z"  ></path></symbol><symbol id="icon-cc-location" viewBox="0 0 1024 1024"><path d="M444.079586 958.1482c-1.923816 0-3.89061-0.264013-5.812379-0.786922-9.7869-2.622734-16.559141-11.44875-16.559141-21.587668L421.708066 600.205924 86.135264 600.205924c-10.091846 0-18.962887-6.817266-21.627577-16.562211-2.62171-9.741875 1.659803-20.054755 10.398838-25.12319L925.019173 66.329684c8.782014-5.047969 19.881816-3.626597 27.045983 3.538593 7.16826 7.166213 8.607028 18.263969 3.495614 27.024493L463.435423 947.006442c-4.108574 7.034207-11.579733 11.142781-19.400862 11.142781L444.079586 958.149223zM169.461041 555.462884l274.618545 0c12.364609 0 22.370497 10.04989 22.370497 22.370497l0 274.662547 408.40969-705.442734L169.461041 555.462884z"  ></path></symbol><symbol id="icon-teach" viewBox="0 0 1186 1024"><path d="M592.921387 678.778172c-46.058321 0-90.43513-11.339423-125.763037-30.461225L189.859879 532.987903l0 223.630233c0 98.109721 63.105181 136.288652 161.274186 195.324791 0 0 123.655759 72.057074 241.787322 72.057074 123.650369 0 241.50168-72.057074 241.50168-72.057074 88.850629-53.889206 161.187955-97.21507 161.187955-195.324791L995.611022 532.987903l-276.931987 115.329044C683.221781 667.438749 638.634783 678.778172 592.921387 678.778172z"  ></path><path d="M1149.070492 258.50812 682.273236 21.900069c-48.925513-29.200092-130.101552-29.200092-178.865382 0L36.556704 258.50812c-48.742272 29.259376-48.742272 76.104558 0 105.09446l466.845761 193.384586c48.769219 28.100642 129.939869 28.100642 178.865382 0l394.039553-163.861127 0 140.120558c0 25.686164 17.779827 45.16906 40.765872 45.16906 21.891984 0 39.828106-19.482896 39.828106-45.16906L1156.901377 357.302302C1197.731922 329.147765 1195.15576 286.344678 1149.070492 258.50812z"  ></path><path d="M1156.906766 783.980421c0 25.157997-17.936121 45.115165-39.828106 45.115165l0 0c-22.781245 0-40.765872-19.957169-40.765872-45.115165l20.097294-93.695753c0-12.816135 9.361491-23.217792 20.673967-23.217792l0 0c10.57412 0 19.941 10.401657 19.941 23.217792L1156.906766 783.980421z"  ></path></symbol><symbol id="icon-wo" viewBox="0 0 1024 1024"><path d="M512 64c247.018667 0 448 200.96 448 448 0 247.018667-200.981333 448-448 448C264.96 960 64 759.018667 64 512 64 264.96 264.96 64 512 64M512 0C229.226667 0 0 229.248 0 512c0 282.794667 229.226667 512 512 512 282.752 0 512-229.205333 512-512C1024 229.248 794.752 0 512 0L512 0z"  ></path><path d="M541.632 615.808c74.197333-13.909333 130.368-78.933333 130.368-157.141333 0-88.384-71.637333-160-160-160-88.384 0-160 71.616-160 160 0 78.208 56.170667 143.253333 130.368 157.141333C326.890667 629.781333 202.730667 752.277333 186.24 907.050667 274.752 980.117333 388.288 1024 512 1024c123.733333 0 237.248-43.882667 325.738667-116.949333C821.269333 752.256 697.109333 629.76 541.632 615.808z"  ></path></symbol><symbol id="icon-portfolio" viewBox="0 0 1024 1024"><path d="M998.4 314.88c0-5.12 0-10.24-2.56-12.8C988.16 253.44 947.2 215.04 896 215.04l-151.04 0c-7.68-110.08-76.8-158.72-222.72-158.72S307.2 104.96 299.52 215.04L145.92 215.04c-51.2 0-92.16 35.84-99.84 84.48-2.56 5.12-2.56 7.68-2.56 12.8 0 0 0 2.56 0 2.56l0 494.08c0 56.32 46.08 102.4 102.4 102.4L896 911.36c56.32 0 102.4-46.08 102.4-102.4L998.4 317.44C998.4 314.88 998.4 314.88 998.4 314.88zM522.24 135.68c122.88 0 140.8 33.28 143.36 79.36L376.32 215.04C381.44 168.96 399.36 135.68 522.24 135.68zM145.92 273.92 896 273.92c17.92 0 35.84 12.8 40.96 30.72l-81.92 140.8c-15.36 25.6-51.2 46.08-81.92 46.08l-151.04 0 0-15.36c0-35.84-28.16-66.56-66.56-66.56l-74.24 0c-35.84 0-66.56 28.16-66.56 66.56l0 15.36-151.04 0c-28.16 0-66.56-23.04-81.92-46.08l-81.92-140.8C112.64 286.72 128 273.92 145.92 273.92zM565.76 476.16 565.76 588.8c0 2.56-2.56 5.12-5.12 5.12l-74.24 0c-2.56 0-5.12-2.56-5.12-5.12l0-110.08c0-2.56 2.56-5.12 5.12-5.12l74.24 0C563.2 471.04 565.76 473.6 565.76 476.16zM896 852.48 145.92 852.48c-23.04 0-40.96-17.92-40.96-40.96L104.96 422.4l30.72 53.76c25.6 43.52 84.48 76.8 133.12 76.8l151.04 0L419.84 588.8c0 35.84 28.16 66.56 66.56 66.56l74.24 0c35.84 0 66.56-28.16 66.56-66.56l0-35.84 151.04 0c48.64 0 107.52-33.28 133.12-76.8l30.72-53.76 0 389.12C939.52 834.56 919.04 852.48 896 852.48z"  ></path></symbol><symbol id="icon-3-copy" viewBox="0 0 1024 1024"><path d="M971.093 865.28c-20.481 64.853-109.227 158.72-191.147 158.72v0h-5.119c-122.88-6.827-290.133-121.173-447.147-308.907l-58.027-69.973c-155.307-187.733-237.227-370.347-218.454-489.813 13.653-83.627 139.947-155.307 211.627-155.308 35.84 0 47.787 17.067 52.907 27.307 40.961 71.68 90.453 196.267 92.16 242.347v3.412l-1.707 3.412c-8.533 23.893-29.013 34.133-46.080 44.373-23.893 13.653-35.84 22.187-37.547 46.080 0 6.826 6.827 40.961 109.227 167.253l44.373 52.906c104.107 121.173 136.532 134.827 143.36 134.827 25.6 3.412 35.84-6.827 54.613-27.307 13.653-15.36 29.013-32.427 54.613-35.84h6.826c44.373 10.24 160.427 83.627 225.28 138.239 6.827 8.533 22.188 27.307 10.24 68.267v0zM930.133 827.733c-71.68-59.733-167.253-114.347-201.387-124.587-10.24 3.413-18.773 10.24-30.72 23.893-18.773 18.773-42.667 42.667-88.747 35.84-20.48-3.413-59.733-22.187-174.080-157.013l-11.947-13.653-6.827-11.947-11.947-13.653c-112.64-136.533-128-182.613-126.294-201.387 3.413-44.373 35.84-64.853 58.027-76.8 15.36-8.533 25.6-13.653 29.013-23.893-3.413-35.84-39.253-136.532-83.627-215.040-3.413-6.827-15.36-8.533-20.48-8.533-56.32 0-158.72 56.32-168.96 119.467-13.654 85.333 34.133 250.88 211.627 462.507l58.027 69.973c175.787 211.627 327.68 286.72 414.72 290.133h3.412c63.147 0 133.12-75.093 150.187-128 3.413-11.947 5.119-23.893 0-27.307z"  ></path></symbol><symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M512.013303 103.370299c-155.939585 0-282.865369 124.424824-282.865369 277.289374 0 133.261073 217.238696 425.735287 282.865369 510.852874 65.49876-85.117586 282.839787-377.692085 282.839787-510.852874C794.85309 227.795123 667.926282 103.370299 512.013303 103.370299zM512.013303 966.614012l-18.512632-23.042809C480.800417 927.683351 182.237531 552.450271 182.237531 380.659673c0-178.24152 147.923004-323.273684 329.774749-323.273684 181.826162 0 329.749166 145.033187 329.749166 323.273684 0 171.789575-298.561863 547.022655-311.364447 562.91153L512.013303 966.614012z"  ></path><path d="M512.013303 235.652068c-40.814568 0-81.631182 15.286148-112.741737 45.784766-62.196551 61.095473-62.196551 160.01746 0 221.012649 31.110555 30.497595 72.028477 45.784766 112.818485 45.784766 40.815591 0 81.527828-15.286148 112.741737-45.784766 62.222133-61.095473 62.222133-160.01746 0-221.012649C593.618902 250.938216 552.802288 235.652068 512.013303 235.652068zM512.013303 281.636379 512.013303 281.636379c29.983895 0 58.303894 11.470239 79.505775 32.253588 43.811832 43.048445 43.811832 113.054869 0 156.002007-21.201881 20.783349-49.52188 32.253588-79.505775 32.253588-30.112832 0-58.329477-11.470239-79.633688-32.253588-43.811832-43.048445-43.811832-112.953561 0-156.002007C453.682803 293.106618 482.003825 281.636379 512.013303 281.636379"  ></path></symbol><symbol id="icon-profile" viewBox="0 0 1024 1024"><path d="M931.445 127.626H92.836c-50.674 0-91.9 41.229-91.9 91.906v584c0 50.678 41.226 91.907 91.9 91.907h33.095c3.36 0.169 6.815 0.259 10.374 0.259 3.799 0 7.015-0.103 9.385-0.213 1.664 0.049 3.327 0.082 4.968 0.082 2.75 0 4.885-0.07 6.154-0.127l366.99 0.582c1.12 0.045 3.015 0.102 5.472 0.102 2.944 0 7.157-0.088 12.029-0.43l4.815 0.004c0.373 0.006 0.974 0.013 1.777 0.013 2.182 0 5.54-0.051 9.652-0.271h373.898c50.674 0 91.9-41.229 91.9-91.907v-584c0-50.679-41.226-91.907-91.9-91.907zM555.94 831.439h-14.532l-1.598 0.161c-0.325 0.033-0.644 0.062-0.963 0.09l-391.474-0.354-1.238-0.007-1.306 0.105-0.053 0.004H127.75c-5.859-0.37-10.296-1.085-13.421-1.81 2.336-32.908 17.356-78.817 53.792-118.562 29.764-32.467 84.165-71.169 174.31-71.169 90.333 0 145.262 38.776 175.434 71.306 36.773 39.646 52.08 85.107 54.612 117.805-4.095 1.04-9.864 1.985-16.537 2.431z m403.405-27.907c0 15.388-12.516 27.907-27.9 27.907h-294.74c-0.984-25.378-7.082-52.505-17.818-78.942-12.519-30.827-31.226-60.155-54.098-84.814C525.952 625.812 455.85 575.9 342.432 575.9c-113.413 0-183.044 49.986-221.486 91.92-24.704 26.948-43.861 58.662-56.01 91.569V219.533c0-15.388 12.516-27.906 27.9-27.906h838.609c15.384 0 27.9 12.519 27.9 27.906v583.999zM344.423 256.117c-83.651 0-151.707 68.053-151.707 151.7 0 83.658 68.055 151.719 151.707 151.719 83.655 0 151.713-68.061 151.713-151.719-0.001-83.647-68.059-151.7-151.713-151.7z m0 239.419c-48.361 0-87.707-39.351-87.707-87.719 0-48.358 39.345-87.7 87.707-87.7 48.365 0 87.713 39.342 87.713 87.7-0.001 48.368-39.348 87.719-87.713 87.719z m232.673-240.46h318v64h-318v-64z m0 128h318v64h-318v-64z m0 128h193v64h-193v-64z"  ></path></symbol><symbol id="icon-book" viewBox="0 0 1024 1024"><path d="M914.286 73.143h-256c-59.75 0-112.892 28.804-146.286 73.251-33.392-44.447-86.535-73.251-146.286-73.251h-256c-40.322 0-73.143 32.803-73.143 73.143v676.571c0 40.322 32.786 73.143 73.143 73.143h268.857c35.893 35.072 83.643 54.857 133.429 54.857S609.536 931.072 645.429 896h268.857c40.322 0 73.143-32.786 73.143-73.143V146.286c0-40.322-32.784-73.143-73.143-73.143z m22.715 734.508c0 19.33-15.67 35-35 35H636.25a38.474 38.474 0 0 0-29.354 13.599C582.709 884.666 548.111 901 512.001 901s-70.708-16.334-94.893-44.75a38.474 38.474 0 0 0-29.354-13.599H122.001c-19.33 0-35-15.67-35-35V158c0-19.33 15.67-35 35-35h235.455c63.916 0 128.91 52.348 128.91 116.7v330.65c0 43.65 51.27 43.65 51.27 0V239.699c0-64.352 64.994-116.7 128.91-116.7h235.455c19.33 0 35 15.67 35 35v649.652z" fill="" ></path></symbol></svg>';
  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1]
  }();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn()
        };
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document, done = false, init = function () {
        if (!done) {
          done = true;
          fn()
        }
      };
      var polling = function () {
        try {
          d.documentElement.doScroll("left")
        } catch (e) {
          setTimeout(polling, 50);
          return
        }
        init()
      };
      polling();
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init()
        }
      }
    }
  };
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  };
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)