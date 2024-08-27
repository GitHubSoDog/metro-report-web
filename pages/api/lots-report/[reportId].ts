import { EXCEPTION_CODE_RESPONSE } from '@/constants/error-code';
import { ReportService } from '@/lib/service';
import type { NextApiRequest, NextApiResponse } from 'next';

const reportService = new ReportService();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, query } = req;
    switch (method) {
      case 'DELETE':
        if (!query?.reportId && !query.lotId) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const deleted = reportService.deleteLotReport(
          query.reportId as string,
          query.lotId as string
        );
        if (deleted) {
          res.status(204).end();
        } else {
          res.status(404).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_05.code,
            message: EXCEPTION_CODE_RESPONSE.GET_05.msg,
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
