import { EXCEPTION_CODE_RESPONSE } from '@/constants/error-code';
import { ReportService } from '@/lib/service';
import type { NextApiRequest, NextApiResponse } from 'next';

const reportService = new ReportService();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, query } = req;
    switch (method) {
      case 'GET':
        if (!query?.reportId) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const data = reportService.getReport(query.reportId as string);
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
      case 'POST':
        if (!query?.reportId) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const newData = req.body;
        const created = reportService.createReport(
          query.reportId as string,
          newData
        );
        if (created) {
          res.status(201).json({ success: true, data: created });
        } else {
          res.status(404).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_03.code,
            message: EXCEPTION_CODE_RESPONSE.GET_03.msg,
          });
        }
        break;
      case 'PATCH':
        if (!query?.reportId) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const patchData = req.body;
        const updated = reportService.updateReport(
          query.reportId as string,
          patchData
        );
        if (updated) {
          res.status(201).json({ success: true, data: updated });
        } else {
          res.status(404).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_04.code,
            message: EXCEPTION_CODE_RESPONSE.GET_04.msg,
          });
        }
        break;
      case 'DELETE':
        if (!query?.reportId) {
          res.status(400).json({
            success: false,
            errorCode: EXCEPTION_CODE_RESPONSE.GET_01.code,
            message: EXCEPTION_CODE_RESPONSE.GET_01.msg,
          });
          break;
        }
        const deleted = reportService.deleteReport(query.reportId as string);
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
