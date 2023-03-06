import { CancellationToken, Uri, Webview, WebviewView, WebviewViewProvider, WebviewViewResolveContext } from "vscode";

export class ChatSidebarProvider implements WebviewViewProvider{

    private _view?:WebviewView;
    public static readonly viewType= "narcossus.chatview";

    constructor(private readonly _extensionUri:Uri){}

    resolveWebviewView(webviewView: WebviewView,
         context: WebviewViewResolveContext<unknown>,
          token: CancellationToken): void | Thenable<void> {
         this._view= webviewView;
         webviewView.webview.options={
            enableScripts:true,
            localResourceRoots:[this._extensionUri]
         };

         webviewView.webview.html= this._getHtmlForWebview(webviewView.webview);
    }

    private _getHtmlForWebview(view:Webview):string{
        const bundleScriptPath = view.asWebviewUri(Uri.joinPath(this._extensionUri, 'out','app', 'bundle.js'));
      
          return `
            <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Chat App</title>
              </head>
              <body>
                <div id="root" style="height:100%"></div>
                <script src="${bundleScriptPath}"></script>
              </body>
            </html>
          `;
      
    }

}