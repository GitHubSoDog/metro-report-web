import { IotServiceType, PostIotRequestType } from '@/type/iot-api';
import { LotType } from '@/type/lots.type';
import { ReportType } from '@/type/report.type';
import {
  genarateIdNormal,
  showLocalDateTime,
  showYmdDate,
} from '@/utilities/normal-fn';

export const transformToIotApi = (report: ReportType): PostIotRequestType => {
  return {
    date: showYmdDate(report.dateReport),
    machinename: report.machine,
    starttime: showLocalDateTime(report.start),
    endtime: showLocalDateTime(report.end),
  };
};

export const transformApiToLotsReport = (
  lots: LotType[],
  iotData: IotServiceType[]
): Record<string, LotType> => {
  const updatedLots = lots.map((lot) => {
    const matchedIotData = iotData.find((iot) => iot.jobname === lot.lotName);

    if (matchedIotData) {
      return {
        ...lot,
        start: new Date(matchedIotData.start_time),
        end: new Date(matchedIotData.end_time),
        dyScreen: matchedIotData.temperature_dyne,
        billetScreen: matchedIotData.temperature_billet,
        container: matchedIotData.container,
        longShop: matchedIotData.lengths,
        speedPull: matchedIotData.speed,
      };
    }

    return lot;
  });

  iotData.forEach((iot) => {
    const isExisting = updatedLots.some((lot) => lot.lotName === iot.jobname);

    if (!isExisting) {
      const newLot: LotType = {
        lotId: genarateIdNormal(),
        lotName: iot.jobname,
        skinType: '',
        billetType: '',
        customerName: '',
        start: new Date(iot.start_time),
        end: new Date(iot.end_time),
        dyNumber: '',
        dyScreen: iot.temperature_dyne,
        dySkin: '',
        billetScreen: iot.temperature_billet,
        billetMiddle: '',
        container: iot.container,
        boNo: '',
        insNo: '',
        holeCount: '',
        averageWeight: '',
        billetWeight: '',
        factoryDate: null,
        billetNumber: '',
        ironingSize: '',
        tendon: '',
        billetCount: '',
        times: '',
        longShop: iot.lengths,
        longExpect: '',
        good: '',
        waste: '',
        wastePercent: '',
        speedPull: iot.speed,
        desc: '',
      };

      updatedLots.push(newLot);
    }
  });

  return updatedLots.reduce((acc, lot) => {
    acc[lot.lotId] = lot;
    return acc;
  }, {} as Record<string, LotType>);
};
