Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"SNGPC","publishDate":"14/01/2025 16:12:45","pages":[{"id":"a4da3214-59d3-4c0a-9403-fc231ccfafde","name":"Ciclo de entrada e saída de medicamento SNGPC","version":"1.0","author":"nev","image":"files\\diagrams\\Ciclo_de_entrada_e_saida_de_medicamento_SNGPC.png","isSubprocessPage":false,"elements":[{"id":"6d3acbed-b5d3-4ea5-be22-230b1b0f877c","name":"Ciclo de Compra e Venda de medicamento sujeito a controle especial","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":664.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"4c40afba-3390-4cdf-9f99-ed6dc8e1293c","name":"Chegada do medicamento","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":140.0,"y":160.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"ebc9f2c0-d349-41bf-b108-823c8d1377bc","name":"Entrada NF-e Compra","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Para a entrada de medicamentos que atendem a exigência de controle de lote, o procedimento de entrada da nota fiscal de compra segue basicamente o mesmo procedimento utilizado para demais produtos. A diferença consiste na necessidade de informar qual o lote do medicamento está sendo recebido no estabelecimento. Mais informações de como realizar a entrada da NF-e de compra acesse o material disponível no link: </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":307.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d59b422-2584-4bf7-b184-34b6f0dabfc3","name":"Conferir Lote NF-e e medicamento","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Antes de confirmar o processamento da Nota Fiscal de entrada, verifique visualmente se o lote indicado no documento fiscal é o mesmo impresso na embalagem do medicamento. Diferenças nessas informações devem ser resolvidas com a devida urgência.</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":439.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"631fb72b-eb9c-4ce2-929c-4625acd514eb","name":"Lote Ok?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">A conferência do lote resulta em duas situações:</span></p>","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":603.0,"y":155.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"26758db4-cd07-41ae-aecd-922fb021eaf1","name":"Entrar contato com fornecedor","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Caso exista diferença do número de lote descrito no documento fiscal com aquele impresso na embalagem do medicamento, entre em contato com o fornecedor.</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":578.0,"y":51.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"85fdf088-7819-4eab-8886-b635b6cec954","name":"Identificar e corrigir erro","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Em contato com o fornecedor busque identificar o motivo da divergência no número do lote e qual a forma de corrigir essa falha. Uma vez identificado e corrigido, pode ser necessário realizar uma nova entrada de documento fiscal ou processar o documento inicial com as devidas observações.</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":439.0,"y":51.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"88cc8e88-3b67-4750-b1c7-dd834a6ab81f","name":"Gerar XML com informações compra","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Após a finalizar a entrada do documento fiscal (confirmar o lote enviado, estoque e afins), deve ser gerado o arquivo XML contendo as movimentações de entrada de medicamentos sujeitos a controle especial desde o último anexo realizado. Mais detalhes de como gerar o arquivo XML, consulte no link a seguir:</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":701.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3d49c0b7-6201-468b-b14b-465586d2dc40","name":"Enviar para SNGPC","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O Responsável Técnico deverá realizar o acesso a plataforma com suas credencias e anexar o arquivo XML com as informações do período selecionado. O Thotau permite efetuar o envio do arquivo diretamente para o SNGPC, mais detalhes consulte no link a seguir: </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":885.0,"y":145.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8dd51eef-7956-49bd-b051-9fd136bb3b0c","name":"XML Compra validado e aceito?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Dentro da plataforma SNGPC na opção \"Status de Transmissão\", o arquivo XML enviado é identificado com sua \"Data Inicial\", \"Data Final\", \"Data Recebimento\", \"Validação Executada\" e \"Foi aceito\". A coluna \"Validação Executada\", diz respeito ao padrão da qual o arquivo XML foi gerado, se ele segue ou não o layout definido pelo SNGPC. Já a coluna \"Foi aceito\", diz respeito as informações de movimentação (entrada e saída) dos medicamentos que foram enviadas no arquivo XML. Caso a coluna \"Foi aceito\", tenha um retorno negativo, será informado o lote do medicamento e o motivo da recusa. Cabe ao Responsável Técnico realizar o acompanhamento desses status e sua correção quando necessário.</span></p>","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":800.0,"y":396.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"a900e753-3116-4dd9-ae8c-3cd4c1ae9d84","name":"Identificar e corrigir erro","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso tenha alguma informação incorreta o status \"Foi aceito\" terá a negativa e abaixo uma descrição do porque aquela informação não ter sido aceita, fazendo referência ao médicamento da qual foi identificado o erro. Cabe ao Responsável Técnico interpretar a mensagem repassada e dar encaminhamento a correção da informação, para gerar um novo arquivo XML e reenviar ao SNGPC.</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":775.0,"y":243.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ffc7d89a-6aea-4a96-b220-1dd038d6ab88","name":"Liberar medicamento para venda","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">É aconselhável liberar um medicamento sujeito a controle especial, apenas após a validação e aceito do seu lote, na plataforma SNGPC. Mas acontece de medicamentos serem comercializados ou mesmo liberados para venda, antes dessa etapa ser concluída. Neste caso, deve se atentar para que informações de venda de um medicamento não sejam enviadas sem a sua devida autorização de comercialização (via lote) por parte da ANVISA. </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":623.0,"y":386.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d9fff87-4434-42cc-adcb-1603024aaa8f","name":"Venda no dia da Entrada?","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso a venda de um medicamento sujeito a controle especial, seja realizada no mesmo dia em que ocorreu o envio das informações de entrada do seu lote, para o SNGPC, deve-se atentar se a validação e aceito já ocorreu no XML com informações de compra desse medicamento. Caso contrário o registro de sua venda só deve ocorrer em data posterior.</span></p>","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":495.0,"y":396.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ef9e0ba6-a1c2-4cb8-8e51-1a4a38d8c6d2","name":"XML Compra validado e aceito?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":359.0,"y":396.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"68051bd7-3d2a-45f8-a9fa-7fc5ce6f9d8d","name":"Identificar e corrigir erro","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso tenha alguma informação incorreta, o status \"Foi aceito\" terá a negativa e abaixo uma descrição do porque aquela informação não ter sido aceita, fazendo referência ao médicamento da qual foi identificado o erro. Cabe ao Responsável Técnico interpretar a mensagem repassada e dar encaminhamento a correção da informação, para gerar um novo arquivo XML e reenviar ao SNGPC.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":183.0,"y":450.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94ace869-ff3a-43c0-9dbd-f5c758e2c416","name":"Gerar XML com informações compra","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":112.0,"y":272.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4be52079-8875-4bbe-a458-0b62a31ee7ff","name":"Enviar  para SNGPC","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O Responsável Técnico deverá realizar o acesso a plataforma com suas credencias e anexar o arquivo XML com as informações do período selecionado. O Thotau permite efetuar o envio do arquivo diretamente para o SNGPC, mais detalhes consulte no link a seguir: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":255.0,"y":272.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f105477-67a4-4b1b-afcf-4981a3017dd0","name":"Gerar XML com informações Venda","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">Pelo menos uma vez por semana, deve ser anexado no SNGPC o arquivo XML contendo as movimentações ocorridas no estabelecimento desde o último anexo realizado. No mesmo arquivo XML são enviadas informações de entrada como de saída no período selecionado. Mais detalhes de como gerar o arquivo XML, consulte no link a seguir:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":470.0,"y":471.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fc4a88df-3ae4-4922-bfa2-a4b907ff6b11","name":"Enviar para SNGPC","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">O Responsável Técnico deverá realizar o acesso a plataforma com suas credencias e anexar o arquivo XML com as informações do período selecionado. O Thotau permite efetuar o envio do arquivo diretamente para o SNGPC, mais detalhes consulte no link a seguir: </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":621.0,"y":471.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"43452177-b50f-4eba-987a-49b66ab743d1","name":"XML Venda validado e aceito?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":646.0,"y":588.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"4e97fd3a-3099-4426-8ca1-f84e27f0dd85","name":"Identificar e corrigir erro","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Caso tenha alguma informação incorreta o status \"Foi aceito\" terá a negativa e abaixo uma descrição do porque aquela informação não ter sido aceita, fazendo referência ao médicamento da qual foi identificado o erro. Cabe ao Responsável Técnico interpretar a mensagem repassada e dar encaminhamento a correção da informação, para gerar um novo arquivo XML e reenviar ao SNGPC.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":470.0,"y":578.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c424722c-0a80-4bb1-81a4-3b9be4a0ef62","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":800.0,"y":593.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"27fbb7a2-91ee-435f-93ba-de0d8e032991","name":"Responsável Técnico (Farmacêutico)","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\">O envio das informações de entrada e saída de medicamentos sujeitos a controle especial é de responsabilidade do Farmacêutico (Responsável Técnico) cadastrado na plataforma SNGPC no momento da certificação do estabelecimento junto à ANVISA. As informações enviadas devem seguir a ordem cronológica dos acontecimentos, visando evitar retrabalho e problemas junto aos órgãos de fiscalização. Este processo ilustra como deve ser o ciclo de entrada e saída de um medicamento, considerando as etapas necessárias para sua correta escrituração no SNGPC. Alguns detalhes devem ser observados:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p><ul start=\"1\" style=\"margin-top:0;margin-bottom:0;\">\r\n\t\t<li style=\"text-align:left;margin:0pt 0pt 0pt 0pt;list-style-type:disc;color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> Toda movimentação realizada no sistema, tem um prazo máximo de 7 dias para ser transmitido eletronicamente no SNGPC.</span></li><li style=\"text-align:left;margin:0pt 0pt 0pt 0pt;list-style-type:disc;color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Arquivos com informações de venda de um medicamento, só podem ser enviados após o arquivo com informações de compra do mesmo medicamento ter sido validado e aceito no SNGPC.</span></li><li style=\"text-align:left;margin:0pt 0pt 0pt 0pt;list-style-type:disc;color:#000000;background-color:transparent;font-family:Arial;font-size:8pt;font-weight:normal;font-style:normal;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">No mesmo arquivo XML, serão enviadas informações de entrada e saída de medicamentos com controle de lote habilitado.</span></li></ul>","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":664.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"a4da3214-59d3-4c0a-9403-fc231ccfafde","containerName":"Ciclo de entrada e saída de medicamento SNGPC","isSubprocess":false,"elements":[{"id":"6d3acbed-b5d3-4ea5-be22-230b1b0f877c","value":"Ciclo de Compra e Venda de medicamento sujeito a controle especial"},{"id":"27fbb7a2-91ee-435f-93ba-de0d8e032991","value":"Responsável Técnico (Farmacêutico)"},{"id":"a900e753-3116-4dd9-ae8c-3cd4c1ae9d84","value":"Identificar e corrigir erro"},{"id":"ebc9f2c0-d349-41bf-b108-823c8d1377bc","value":"Entrada NF-e Compra"},{"id":"26758db4-cd07-41ae-aecd-922fb021eaf1","value":"Entrar contato com fornecedor"},{"id":"631fb72b-eb9c-4ce2-929c-4625acd514eb","value":"Lote Ok?"},{"id":"4c40afba-3390-4cdf-9f99-ed6dc8e1293c","value":"Chegada do medicamento"},{"id":"4d9fff87-4434-42cc-adcb-1603024aaa8f","value":"Venda no dia da Entrada?"},{"id":"68051bd7-3d2a-45f8-a9fa-7fc5ce6f9d8d","value":"Identificar e corrigir erro"},{"id":"ffc7d89a-6aea-4a96-b220-1dd038d6ab88","value":"Liberar medicamento para venda"},{"id":"85fdf088-7819-4eab-8886-b635b6cec954","value":"Identificar e corrigir erro"},{"id":"4d59b422-2584-4bf7-b184-34b6f0dabfc3","value":"Conferir Lote NF-e e medicamento"},{"id":"ef9e0ba6-a1c2-4cb8-8e51-1a4a38d8c6d2","value":"XML Compra validado e aceito?"},{"id":"88cc8e88-3b67-4750-b1c7-dd834a6ab81f","value":"Gerar XML com informações compra"},{"id":"8dd51eef-7956-49bd-b051-9fd136bb3b0c","value":"XML Compra validado e aceito?"},{"id":"3d49c0b7-6201-468b-b14b-465586d2dc40","value":"Enviar para SNGPC"},{"id":"8f105477-67a4-4b1b-afcf-4981a3017dd0","value":"Gerar XML com informações Venda"},{"id":"fc4a88df-3ae4-4922-bfa2-a4b907ff6b11","value":"Enviar para SNGPC"},{"id":"43452177-b50f-4eba-987a-49b66ab743d1","value":"XML Venda validado e aceito?"},{"id":"c424722c-0a80-4bb1-81a4-3b9be4a0ef62","value":""},{"id":"4e97fd3a-3099-4426-8ca1-f84e27f0dd85","value":"Identificar e corrigir erro"},{"id":"94ace869-ff3a-43c0-9dbd-f5c758e2c416","value":"Gerar XML com informações compra"},{"id":"4be52079-8875-4bbe-a458-0b62a31ee7ff","value":"Enviar  para SNGPC"}]}]}