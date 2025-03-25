import { Injectable } from '@nestjs/common';
import * as tencentcloud from 'tencentcloud-sdk-nodejs';
// ocr.tencentcloudapi.com
const OcrClient = tencentcloud.ocr.v20181119.Client as any;

@Injectable()
export class OcrService {
  constructor() {}

  async ocr(file: Express.Multer.File, res) {
    try {
      // 获取文件的MIME类型
      const mimeType = file.mimetype;
      // 将文件buffer转为base64
      const base64String = file.buffer.toString('base64');
      // 组合完整的base64字符串，包含MIME类型
      const base64 = `data:${mimeType};base64,${base64String}`;

      // console.log(base64)
      // console.log(tencentcloud);

      const client = new OcrClient({
        // 腾讯云认证信息
        credential: {
          secretId: process.env.TENCENT_CLOUD_SECRET,
          secretKey: process.env.TENCENT_CLOUD_SECRET_KEY,
        },
        // 产品地域
        region: 'ap-shanghai',
        // 可选配置实例
        profile: {
          signMethod: 'TC3-HMAC-SHA256', // 签名方法
          httpProfile: {
            reqMethod: 'POST', // 请求方法
            reqTimeout: 30, // 请求超时时间，默认60s
          },
        },
      });

      const params = {
        ImageBase64: base64,
      };

      // // 通过client对象调用想要访问的接口（Action），需要传入请求对象（Params）以及响应回调函数
      // // 即：client.Action(Params).then(res => console.log(res), err => console.error(err))
      client.RecognizeTableAccurateOCR(params).then(
        (data) => {
          return res.send({
            result: 0,
            success: true,
            data,
          });
        },
        (err) => {
          console.error('error', err);
        },
      );
    } catch (error) {
      return res.send({
        success: false,
        error: error.message,
      });
    }
    return;
  }

  async ocrticket(file: Express.Multer.File, res) {
    try {
      // 获取文件的MIME类型
      const mimeType = file.mimetype;
      // 将文件buffer转为base64
      const base64String = file.buffer.toString('base64');
      // 组合完整的base64字符串，包含MIME类型
      const base64 = `data:${mimeType};base64,${base64String}`;

      // console.log(base64)
      // console.log(tencentcloud);

      const client = new OcrClient({
        // 腾讯云认证信息
        credential: {
          secretId: process.env.TENCENT_CLOUD_SECRET,
          secretKey: process.env.TENCENT_CLOUD_SECRET_KEY,
        },
        // 产品地域
        region: 'ap-shanghai',
        // 可选配置实例
        profile: {
          signMethod: 'TC3-HMAC-SHA256', // 签名方法
          httpProfile: {
            reqMethod: 'POST', // 请求方法
            reqTimeout: 30, // 请求超时时间，默认60s
          },
        },
      });

      const params = {
        ImageBase64: base64,
        Types: [17],
      };

      // // 通过client对象调用想要访问的接口（Action），需要传入请求对象（Params）以及响应回调函数
      // // 即：client.Action(Params).then(res => console.log(res), err => console.error(err))
      client.RecognizeMedicalInvoiceOCR(params).then(
        (data) => {
          return res.send({
            result: 0,
            success: true,
            data,
          });
        },
        (err) => {
          console.error('error', err);
        },
      );
    } catch (error) {
      return res.send({
        success: false,
        error: error.message,
      });
    }
    return;
  }
}
