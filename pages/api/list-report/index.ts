import { EXCEPTION_CODE_RESPONSE } from '@/constants/error-code';
import { ReportService } from '@/lib/service';
import type { NextApiRequest, NextApiResponse } from 'next';

const reportService = new ReportService();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, query } = req;
    switch (method) {
      case 'GET':
        if (!query.page || !query.limit) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const data = reportService.getListReport(
          query.page as string,
          query.limit as string
        );
        if (data) {
          res.status(200).json({ success: true, data });
        } else {
          res.status(404).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_02.code,
            message: EXCEPTION_CODE_RESPONSE.GET_02.msg,
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
  } catch (error) {
    res.status(500).json({
      success: false,
      errorCode: EXCEPTION_CODE_RESPONSE.TE_00.code,
      message: EXCEPTION_CODE_RESPONSE.TE_00.msg,
      reason: error,
    });
  }
}
