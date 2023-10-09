export const baseTemplateEmail = `
<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
        }
        
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }
        
        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }
        
        p {
            line-height: inherit
        }
        
        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }
        
        @media (max-width:2560px) {
            .desktop_hide table.icons-inner {
                display: inline-block !important;
            }
            .icons-inner {
                text-align: center;
            }
            .icons-inner td {
                margin: 0 auto;
            }
            .row-content {
                width: 100% !important;
            }
            .mobile_hide {
                display: none;
            }
           
            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }
            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }
        }
    </style>
</head>

<body style="margin: auto; background-color: #ffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;width:100%">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: none; background-position: center; background-size: auto; background-repeat: no-repeat;"
        width="100%">
        <tbody>
            <tr>
                <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;" width="800px">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; border-top: 0 solid #B2A9A9; border-right: 0px solid #B2A9A9; border-left: auto solid #B2A9A9; border-bottom: 0 solid #B2A9A9; border-radius: 8px; width: 650px;">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: center; vertical-align: top; padding-top: 0px;border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: auto;" width="100%">

                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="html_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                        <tr>
                                                            <td align="center" class="pad" align="center" style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;text-align:center;">
                                                                <div>


                                                                    <div style=" text-align: center;background-color: #F5F5F5;margin: auto;padding-top: 101px;padding-bottom: 101px;">
                                                                        <div style=" background-color: #FFFFFF;border-radius: 8px;padding: 48px;width: 650px;margin: auto;height: auto;">
                                                                            <div style="margin: 32px 0;top: 160px;">
                                                                                <img alt="logo" src="https://d2aq68l8afi62p.cloudfront.net/logo.png" width=100px height=100px/>
                                                                            </div>
                                                                            

                                                                            <!-- contentBody START -->

                                                                            {{contentBody}}

                                                                            <!-- contentBody END -->
                                                                        
                                                                      
                                                                        
                                                                        
                                                                       
                                                                    </div>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- End -->
</body>

</html>
`;
