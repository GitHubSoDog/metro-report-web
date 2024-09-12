import { LOT_DEFAULT } from '@/constants/lot';
import { IotServiceType, PostIotRequestType } from '@/type/iot-api';
import { LotType } from '@/type/lots.type';
import { ReportType } from '@/type/report.type';
import {
  genarateIdNormal,
  showLocalDateTime,
  showLocalDateTimeFormatWeb,
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
    const matchedIotData = iotData.find(
      (_iot) =>
        _iot.jobname === lot.lotName &&
        _iot.container === lot.container &&
        _iot.lengths === lot.longShop &&
        _iot.temperature_dyne === lot.dyScreen &&
        _iot.temperature_billet === lot.billetScreen &&
        _iot.speed === lot.speedPull &&
        showLocalDateTimeFormatWeb(new Date(iotData[0].start_time)) ===
          showLocalDateTimeFormatWeb(lots[1]?.start) &&
        showLocalDateTimeFormatWeb(new Date(iotData[0].end_time)) ===
          showLocalDateTimeFormatWeb(lots[1]?.end)
    );

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

  iotData.forEach((_iot) => {
    const isExisting = updatedLots.find(
      (lot) =>
        _iot.jobname === lot.lotName &&
        _iot.container === lot.container &&
        _iot.lengths === lot.longShop &&
        _iot.temperature_dyne === lot.dyScreen &&
        _iot.temperature_billet === lot.billetScreen &&
        _iot.speed === lot.speedPull &&
        showLocalDateTimeFormatWeb(new Date(_iot.start_time)) ===
          showLocalDateTimeFormatWeb(lot.start) &&
        showLocalDateTimeFormatWeb(new Date(_iot.end_time)) ===
          showLocalDateTimeFormatWeb(lot.end)
    );
    if (!isExisting) {
      const newLot: LotType = {
        ...LOT_DEFAULT,
        lotId: genarateIdNormal(),
        lotName: _iot.jobname,
        start: new Date(_iot.start_time),
        end: new Date(_iot.end_time),
        dyScreen: _iot.temperature_dyne,
        billetScreen: _iot.temperature_billet,
        container: _iot.container,
        longShop: _iot.lengths,
        speedPull: _iot.speed,
      };

      updatedLots.push(newLot);
    }
  });

  return updatedLots.reduce((acc, lot) => {
    acc[lot.lotId] = lot;
    return acc;
  }, {} as Record<string, LotType>);
};
