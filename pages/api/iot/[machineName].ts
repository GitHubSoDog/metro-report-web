import externalInstance from '@/configuration/external.http';
import { EXCEPTION_CODE_RESPONSE } from '@/constants/error-code';
import { IotServiceType } from '@/type/iot-api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  switch (method) {
    case 'POST':
      try {
        if (!query.machineName) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const response = await externalInstance.post<IotServiceType[]>(
          '/uai/getdata',
          {
            ...req.body,
          }
        );
        res.status(200).json(response.data);
      } catch (error: any) {
        res.status(error?.data?.response?.status || 500).json({
          success: false,
          errorCode: EXCEPTION_CODE_RESPONSE.TE_00.code,
          message: EXCEPTION_CODE_RESPONSE.TE_00.msg,
          reason: error,
        });
      }

      break;
    default:
      res.status(405).json({
        success: false,
        errorCode: EXCEPTION_CODE_RESPONSE.GET_00.code,
        message: EXCEPTION_CODE_RESPONSE.GET_00.msg,
      });
      break;
  }
}
