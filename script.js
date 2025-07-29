// 1. Dados dos horários (copiados das tabelas que geramos)
const schedules = {
    azul: [
        { ponto_onibus: 'Rodoviária', horarios_seg_sex: '5h00, 6h30, 8h00, 9h30, 11h00, 12h30, 14h00, 15h30, 17h00, 18h30, 20h00, 21h30', horarios_sabado: '9h00, 11h00, 15h30, 17h00, 18h30', horarios_domingo: '9h00, 11h00, 16h00, 18h30' },
        { ponto_onibus: 'Fazendinha', horarios_seg_sex: '5h02, 6h32, 8h02, 9h32, 11h02, 12h32, 14h02, 15h32, 17h02, 18h32, 20h02, 21h32', horarios_sabado: '9h02, 11h02, 15h32, 17h02, 18h32', horarios_domingo: '9h02, 11h02, 16h02, 18h32' },
        { ponto_onibus: 'Rodrigues Alves', horarios_seg_sex: '5h04, 6h34, 8h04, 9h34, 11h04, 12h34, 14h04, 15h34, 17h04, 18h34, 20h04, 21h34', horarios_sabado: '9h04, 11h04, 15h34, 17h04, 18h34', horarios_domingo: '9h04, 11h04, 16h04, 18h34' },
        { ponto_onibus: 'Arlindo Campana', horarios_seg_sex: '5h05, 6h35, 8h05, 9h35, 11h05, 12h35, 14h05, 15h35, 17h05, 18h35, 20h05, 21h35', horarios_sabado: '9h05, 11h05, 15h35, 17h05, 18h35', horarios_domingo: '9h05, 11h05, 16h05, 18h35' },
        { ponto_onibus: 'Secretaria de Educação', horarios_seg_sex: '5h07, 6h37, 8h07, 9h37, 11h07, 12h37, 14h07, 15h37, 17h07, 18h37, 20h07, 21h37', horarios_sabado: '9h07, 11h07, 15h37, 17h07, 18h37', horarios_domingo: '9h07, 11h07, 16h07, 18h37' },
        { ponto_onibus: 'Prudente de Moraes', horarios_seg_sex: '5h10, 6h40, 8h10, 9h40, 11h10, 12h40, 14h10, 15h40, 17h10, 18h40, 20h10, 21h40', horarios_sabado: '9h10, 11h10, 15h40, 17h10, 18h40', horarios_domingo: '9h10, 11h10, 16h10, 18h40' },
        { ponto_onibus: 'Igreja Santa Cruz', horarios_seg_sex: '5h11, 6h41, 8h11, 9h41, 11h11, 12h41, 14h11, 15h41, 17h11, 18h41, 20h11, 21h41', horarios_sabado: '9h11, 11h11, 15h41, 17h11, 18h41', horarios_domingo: '9h11, 11h11, 16h11, 18h41' },
        { ponto_onibus: 'Pe. Arthur Silveira', horarios_seg_sex: '5h12, 6h42, 8h12, 9h42, 11h12, 12h42, 14h12, 15h42, 17h12, 18h42, 20h12, 21h42', horarios_sabado: '9h12, 11h12, 15h42, 17h12, 18h42', horarios_domingo: '9h12, 11h12, 16h12, 18h42' },
        { ponto_onibus: 'Monteiro Lobato', horarios_seg_sex: '5h14, 6h44, 8h14, 9h44, 11h14, 12h44, 14h14, 15h44, 17h14, 18h44, 20h14, 21h44', horarios_sabado: '9h14, 11h14, 15h44, 17h14, 18h44', horarios_domingo: '9h14, 11h14, 16h14, 18h44' },
        { ponto_onibus: 'Dr. Soares Hungria', horarios_seg_sex: '5h15, 6h45, 8h15, 9h45, 11h15, 12h45, 14h15, 15h45, 17h15, 18h45, 20h15, 21h45', horarios_sabado: '9h15, 11h15, 15h45, 17h15, 18h45', horarios_domingo: '9h15, 11h15, 16h15, 18h45' },
        { ponto_onibus: 'Avenida Brasil', horarios_seg_sex: '5h18, 6h48, 8h18, 9h48, 11h18, 12h48, 14h18, 15h48, 17h18, 18h48, 20h18, 21h48', horarios_sabado: '9h18, 11h18, 15h48, 17h18, 18h48', horarios_domingo: '9h18, 11h18, 16h18, 18h48' },
        { ponto_onibus: 'Belirde', horarios_seg_sex: '5h20, 6h50, 8h20, 9h50, 11h20, 12h50, 14h20, 15h50, 17h20, 18h50, 20h20, 21h50', horarios_sabado: '9h20, 11h20, 15h50, 17h20, 18h50', horarios_domingo: '9h20, 11h20, 16h20, 18h50' },
        { ponto_onibus: 'Rio Grande do Norte', horarios_seg_sex: '5h21, 6h51, 8h21, 9h51, 11h21, 12h51, 14h21, 15h51, 17h21, 18h51, 20h21, 21h51', horarios_sabado: '9h21, 11h21, 15h51, 17h21, 18h51', horarios_domingo: '9h21, 11h21, 16h21, 18h51' },
        { ponto_onibus: 'Escola Luigi', horarios_seg_sex: '5h22, 6h52, 8h22, 9h52, 11h22, 12h52, 14h22, 15h22, 17h22, 18h52, 20h22, 21h52', horarios_sabado: '9h22, 11h22, 15h52, 17h22, 18h52', horarios_domingo: '9h22, 11h22, 16h22, 18h52' },
        { ponto_onibus: 'UBSF Parque Alvorada', horarios_seg_sex: '5h25, 6h55, 8h25, 9h55, 11h25, 12h55, 14h25, 15h55, 17h25, 18h55, 20h25, 21h55', horarios_sabado: '9h25, 11h25, 15h55, 17h25, 18h55', horarios_domingo: '9h25, 11h25, 16h25, 18h55' },
        { ponto_onibus: 'Antônio Bellucci', horarios_seg_sex: '5h28, 6h58, 8h28, 9h58, 11h28, 12h58, 14h28, 15h58, 17h28, 18h58, 20h28, 21h58', horarios_sabado: '9h28, 11h28, 15h58, 17h28, 18h58', horarios_domingo: '9h28, 11h28, 16h28, 18h58' },
        { ponto_onibus: 'Topázio', horarios_seg_sex: '5h30, 7h00, 8h30, 10h00, 11h30, 13h00, 14h30, 16h00, 17h30, 19h00, 20h30, 22h00', horarios_sabado: '9h30, 11h30, 16h00, 17h30, 19h00', horarios_domingo: '9h30, 11h30, 16h30, 19h00' },
        { ponto_onibus: 'Praça da Família', horarios_seg_sex: '5h31, 7h01, 8h31, 10h01, 11h31, 13h01, 14h31, 16h01, 17h31, 19h01, 20h31, 22h01', horarios_sabado: '9h31, 11h31, 16h01, 17h31, 19h01', horarios_domingo: '9h31, 11h31, 16h31, 19h01' },
        { ponto_onibus: 'Belmiro Marin', horarios_seg_sex: '5h34, 7h04, 8h34, 10h04, 11h34, 13h04, 14h34, 16h04, 17h34, 19h04, 20h34, 22h04', horarios_sabado: '9h34, 11h34, 16h04, 17h34, 19h04', horarios_domingo: '9h34, 11h34, 16h34, 19h04' },
        { ponto_onibus: 'Escola Yolanda', horarios_seg_sex: '5h35, 7h05, 8h35, 10h05, 11h35, 13h05, 14h35, 16h05, 17h35, 19h05, 20h35, 22h05', horarios_sabado: '9h35, 11h35, 16h05, 17h35, 19h05', horarios_domingo: '9h35, 11h35, 16h35, 19h05' },
        { ponto_onibus: 'Nossa Senhora Aparecida', horarios_seg_sex: '5h39, 7h09, 8h39, 10h09, 11h39, 13h09, 14h39, 16h09, 17h39, 19h09, 20h39, 22h09', horarios_sabado: '9h38, 11h38, 16h08, 17h38, 19h08', horarios_domingo: '9h38, 11h38, 16h38, 19h08' },
        { ponto_onibus: 'Francisco Grando', horarios_seg_sex: '5h41, 7h11, 8h41, 10h11, 11h41, 13h11, 14h41, 16h11, 17h41, 19h11, 20h41, 22h11', horarios_sabado: '9h41, 11h41, 16h11, 17h41, 19h11', horarios_domingo: '9h41, 11h41, 16h41, 19h11' },
        { ponto_onibus: 'Aristides Baião', horarios_seg_sex: '5h45, 7h15, 8h45, 10h15, 11h45, 13h15, 14h45, 16h15, 17h45, 19h15, 20h45, 22h15', horarios_sabado: '9h45, 11h45, 16h15, 17h45, 19h15', horarios_domingo: '9h45, 11h45, 16h45, 19h15' },
        { ponto_onibus: 'UBSF Parque das Árvores', horarios_seg_sex: '5h47, 7h17, 8h47, 10h17, 11h47, 13h17, 14h47, 16h17, 17h47, 19h17, 20h47, 22h17', horarios_sabado: '9h47, 11h47, 16h17, 17h47, 19h17', horarios_domingo: '9h47, 11h47, 16h47, 19h17' },
        { ponto_onibus: 'Praça dos Imigrantes', horarios_seg_sex: '5h50, 7h20, 8h50, 10h20, 11h50, 13h20, 14h50, 16h20, 17h50, 19h20, 20h50, 22h20', horarios_sabado: '9h49, 11h49, 16h19, 17h49, 19h19', horarios_domingo: '9h49, 11h49, 16h49, 19h19' },
        { ponto_onibus: 'Praça da Matriz', horarios_seg_sex: '5h51, 7h21, 8h51, 10h21, 11h51, 13h21, 14h51, 16h21, 17h51, 19h21, 20h51, 22h21', horarios_sabado: '9h51, 11h51, 16h21, 17h51, 19h21', horarios_domingo: '9h51, 11h51, 16h51, 19h21' },
        { ponto_onibus: 'Presidente Washington Luís', horarios_seg_sex: '5h53, 7h23, 8h53, 10h23, 11h53, 13h23, 14h53, 16h23, 17h53, 19h23, 20h53, 22h23', horarios_sabado: '9h54, 11h54, 16h24, 17h54, 19h24', horarios_domingo: '9h54, 11h54, 16h54, 19h24' },
        { ponto_onibus: 'Recanto das Rosas', horarios_seg_sex: '5h59, 7h29, 8h59, 10h29, 11h59, 13h29, 14h59, 16h29, 17h59, 19h29, 20h59, 22h29', horarios_sabado: '9h56, 11h56, 16h26, 17h56, 19h26', horarios_domingo: '9h56, 11h56, 16h56, 19h26' },
        { ponto_onibus: 'Ondina Grando', horarios_seg_sex: '6h01, 7h31, 9h01, 10h31, 12h01, 13h31, 15h01, 16h31, 18h01, 19h31, 21h01, 22h31', horarios_sabado: '10h00, 12h00, 16h30, 18h00, 19h30', horarios_domingo: '10h00, 12h00, 17h00, 19h30' },
        { ponto_onibus: 'Flamboyant', horarios_seg_sex: '6h04, 7h34, 9h04, 10h34, 12h04, 13h34, 15h04, 16h34, 18h04, 19h34, 21h04, 22h34', horarios_sabado: '10h02, 12h02, 16h32, 18h02, 19h32', horarios_domingo: '10h02, 12h02, 17h02, 19h32' },
        { ponto_onibus: 'Fórum', horarios_seg_sex: '6h09, 7h39, 9h09, 10h39, 12h09, 13h39, 15h09, 16h39, 18h09, 19h39, 21h09, 22h39', horarios_sabado: '10h07, 12h07, 16h37, 18h07, 19h37', horarios_domingo: '10h07, 12h07, 17h07, 19h37' },
        { ponto_onibus: 'Câmara Municipal', horarios_seg_sex: '6h12, 7h42, 9h12, 10h42, 12h12, 13h42, 15h12, 16h42, 18h12, 19h42, 21h12, 22h42', horarios_sabado: '10h08, 12h08, 16h38, 18h08, 19h38', horarios_domingo: '10h08, 12h08, 17h08, 19h38' },
        { ponto_onibus: 'Centro de Eventos', horarios_seg_sex: '6h15, 7h45, 9h15, 10h45, 12h15, 13h45, 15h15, 16h45, 18h15, 19h45, 21h15, 22h45', horarios_sabado: '10h10, 12h10, 16h40, 18h10, 19h40', horarios_domingo: '10h10, 12h10, 17h10, 19h40' },
        { ponto_onibus: 'Prefeito Antônio Souto', horarios_seg_sex: '6h18, 7h48, 9h18, 10h48, 12h18, 13h48, 15h18, 16h48, 18h18, 19h48, 21h18, 22h48', horarios_sabado: '10h13, 12h13, 16h43, 18h13, 19h43', horarios_domingo: '10h13, 12h13, 17h13, 19h43' },
        { ponto_onibus: 'Ginásio Mário Pilon', horarios_seg_sex: '6h20, 7h50, 9h20, 10h50, 12h20, 13h50, 15h20, 16h50, 18h20, 19h50, 21h20, 22h50', horarios_sabado: '10h14, 12h14, 16h44, 18h14, 19h44', horarios_domingo: '10h14, 12h14, 17h14, 19h44' },
        { ponto_onibus: 'Domênico Bellucci', horarios_seg_sex: '6h22, 7h52, 9h22, 10h52, 12h22, 13h52, 15h22, 16h52, 18h22, 19h52, 21h22, 22h52', horarios_sabado: '10h15, 12h15, 16h45, 18h15, 19h45', horarios_domingo: '10h15, 12h15, 17h15, 19h45' },
        { ponto_onibus: 'Praça Cittá Bellucci', horarios_seg_sex: '6h25, 7h55, 9h25, 10h55, 12h25, 13h55, 15h25, 16h55, 18h25, 19h55, 21h25, 22h55', horarios_sabado: '10h18, 12h18, 16h48, 18h18, 19h48', horarios_domingo: '10h18, 12h18, 17h18, 19h48' },
        { ponto_onibus: 'Corradi II', horarios_seg_sex: '6h28, 7h58, 9h28, 10h58, 12h28, 13h58, 15h28, 16h58, 18h28, 19h58, 21h28, 22h58', horarios_sabado: '10h21, 12h21, 16h51, 18h21, 19h51', horarios_domingo: '10h21, 12h21, 17h21, 19h51' },
        { ponto_onibus: 'Policlínica', horarios_seg_sex: '6h29, 7h59, 9h29, 10h59, 12h29, 13h59, 15h29, 16h59, 18h29, 19h59, 21h29, 22h59', horarios_sabado: '10h24, 12h24, 16h54, 18h24, 19h54', horarios_domingo: '10h24, 12h24, 17h24, 19h54' },
    ],
    rosa: [
        { ponto_onibus: 'Rodoviária', horarios_seg_sex: '5h00, 6h30, 8h00, 9h30, 11h00, 12h30, 14h00, 15h30, 17h00, 18h30, 20h00, 21h30', horarios_sabado: '9h00, 11h00, 15h30, 17h00, 18h30', horarios_domingo: '9h00, 11h00, 16h00, 18h30' },
        { ponto_onibus: 'Vila Pedroso', horarios_seg_sex: '5h03, 6h33, 8h03, 9h33, 11h03, 12h33, 14h03, 15h33, 17h03, 18h33, 20h03, 21h33', horarios_sabado: '9h03, 11h03, 15h33, 17h03, 18h33', horarios_domingo: '9h03, 11h03, 16h03, 18h33' },
        { ponto_onibus: 'Velho Ramal', horarios_seg_sex: '5h04, 6h34, 8h04, 9h34, 11h04, 12h34, 14h04, 15h34, 17h04, 18h34, 20h04, 21h34', horarios_sabado: '9h04, 11h04, 15h34, 17h04, 18h34', horarios_domingo: '9h04, 11h04, 16h04, 18h34' },
        { ponto_onibus: 'Concessionárias', horarios_seg_sex: '5h07, 6h37, 8h07, 9h37, 11h07, 12h37, 14h07, 15h37, 17h07, 18h37, 20h07, 21h37', horarios_sabado: '9h07, 11h07, 15h37, 17h07, 18h37', horarios_domingo: '9h07, 11h07, 16h07, 18h37' },
        { ponto_onibus: 'Lupo Panelli', horarios_seg_sex: '5h08, 6h38, 8h08, 9h38, 11h08, 12h38, 14h08, 15h38, 17h08, 18h38, 20h08, 21h38', horarios_sabado: '9h08, 11h08, 15h38, 17h08, 18h38', horarios_domingo: '9h08, 11h08, 16h08, 18h38' },
        { ponto_onibus: 'Vicente Peperaio', horarios_seg_sex: '5h09, 6h39, 8h09, 9h39, 11h09, 12h39, 14h09, 15h39, 17h09, 18h39, 20h09, 21h39', horarios_sabado: '9h09, 11h09, 15h39, 17h09, 18h39', horarios_domingo: '9h09, 11h09, 16h09, 18h39' },
        { ponto_onibus: 'Distrito Industrial', horarios_seg_sex: '5h13, 6h43, 8h13, 9h43, 11h13, 12h43, 14h13, 15h43, 17h13, 18h43, 20h13, 21h43', horarios_sabado: '9h12, 11h12, 15h42, 17h12, 18h42', horarios_domingo: '9h12, 11h12, 16h12, 18h42' },
        { ponto_onibus: 'Previdência', horarios_seg_sex: '5h14, 6h44, 8h14, 9h44, 11h14, 12h44, 14h14, 15h44, 17h14, 18h44, 20h14, 21h44', horarios_sabado: '9h15, 11h15, 15h45, 17h15, 18h45', horarios_domingo: '9h15, 11h15, 16h15, 18h45' },
        { ponto_onibus: 'Adelaide Tozzi', horarios_seg_sex: '5h15, 6h45, 8h15, 9h45, 11h15, 12h45, 14h15, 15h45, 17h15, 18h45, 20h15, 21h45', horarios_sabado: '9h16, 11h16, 15h46, 17h16, 18h46', horarios_domingo: '9h16, 11h16, 16h16, 18h46' },
        { ponto_onibus: 'Romano Sacon', horarios_seg_sex: '5h16, 6h46, 8h16, 9h46, 11h16, 12h46, 14h16, 15h46, 17h16, 18h46, 20h16, 21h46', horarios_sabado: '9h17, 11h17, 15h47, 17h17, 18h47', horarios_domingo: '9h17, 11h17, 16h17, 18h47' },
        { ponto_onibus: 'Davina Moreira', horarios_seg_sex: '5h17, 6h47, 8h17, 9h47, 11h17, 12h47, 14h17, 15h47, 17h17, 18h47, 20h17, 21h47', horarios_sabado: '9h18, 11h18, 15h48, 17h18, 18h48', horarios_domingo: '9h18, 11h18, 16h18, 18h48' },
        { ponto_onibus: 'Fundo Social', horarios_seg_sex: '5h18, 6h48, 8h18, 9h48, 11h18, 12h48, 14h18, 15h48, 17h18, 18h48, 20h18, 21h48', horarios_sabado: '9h19, 11h19, 15h49, 17h19, 18h49', horarios_domingo: '9h19, 11h19, 16h19, 18h49' },
        { ponto_onibus: 'Ayrton Senna', horarios_seg_sex: '5h20, 6h50, 8h20, 9h50, 11h20, 12h50, 14h20, 15h50, 17h20, 18h50, 20h20, 21h50', horarios_sabado: '9h21, 11h21, 15h51, 17h21, 18h51', horarios_domingo: '9h21, 11h21, 16h21, 18h51' },
        { ponto_onibus: 'Praça da Bíblia', horarios_seg_sex: '5h22, 6h52, 8h22, 9h52, 11h22, 12h52, 14h22, 15h22, 17h22, 18h52, 20h22, 21h52', horarios_sabado: '9h22, 11h22, 15h52, 17h22, 18h52', horarios_domingo: '9h22, 11h22, 16h22, 18h52' },
        { ponto_onibus: 'Lázara Sabatini', horarios_seg_sex: '5h23, 6h53, 8h23, 9h53, 11h23, 12h53, 14h23, 15h53, 17h23, 18h53, 20h23, 21h53', horarios_sabado: '9h23, 11h23, 15h53, 17h23, 18h53', horarios_domingo: '9h23, 11h23, 16h23, 18h53' },
        { ponto_onibus: 'UBSF Nova Cerquilho', horarios_seg_sex: '5h24, 6h54, 8h24, 9h54, 11h24, 12h54, 14h24, 15h54, 17h24, 18h54, 20h24, 21h54', horarios_sabado: '9h25, 11h25, 15h55, 17h25, 18h55', horarios_domingo: '9h25, 11h25, 16h25, 18h55' },
        { ponto_onibus: 'Marina Bordenale', horarios_seg_sex: '5h25, 6h55, 8h25, 9h55, 11h25, 12h55, 14h25, 15h55, 17h25, 18h55, 20h25, 21h55', horarios_sabado: '9h26, 11h26, 15h56, 17h26, 18h56', horarios_domingo: '9h26, 11h26, 16h26, 18h56' },
        { ponto_onibus: 'Campo União', horarios_seg_sex: '5h26, 6h56, 8h26, 9h56, 11h26, 12h56, 14h26, 15h56, 17h26, 18h56, 20h26, 21h56', horarios_sabado: '9h27, 11h27, 15h57, 17h27, 18h57', horarios_domingo: '9h27, 11h27, 16h27, 18h57' },
        { ponto_onibus: 'Vitória Marcon', horarios_seg_sex: '5h28, 6h58, 8h28, 9h58, 11h28, 12h58, 14h28, 15h58, 17h28, 18h58, 20h28, 21h58', horarios_sabado: '9h29, 11h29, 15h59, 17h29, 18h59', horarios_domingo: '9h29, 11h29, 16h29, 18h59' },
        { ponto_onibus: 'ETEC', horarios_seg_sex: '5h30, 7h00, 8h30, 10h00, 11h30, 13h00, 14h30, 16h00, 17h30, 19h00, 20h30, 22h00', horarios_sabado: '9h30, 11h30, 16h00, 17h30, 19h00', horarios_domingo: '9h30, 11h30, 16h30, 19h00' },
        { ponto_onibus: 'SESI', horarios_seg_sex: '5h32, 7h02, 8h32, 10h02, 11h32, 13h02, 14h32, 16h02, 17h32, 19h02, 20h32, 22h02', horarios_sabado: '9h32, 11h32, 16h02, 17h32, 19h02', horarios_domingo: '9h32, 11h32, 16h32, 19h02' },
        { ponto_onibus: 'João Pilon', horarios_seg_sex: '5h35, 7h05, 8h35, 10h05, 11h35, 13h05, 14h35, 16h05, 17h35, 19h05, 20h35, 22h05', horarios_sabado: '9h34, 11h34, 16h04, 17h34, 19h04', horarios_domingo: '9h34, 11h34, 16h34, 19h04' },
        { ponto_onibus: 'Padre Júlio', horarios_seg_sex: '5h36, 7h06, 8h36, 10h06, 11h36, 13h06, 14h36, 16h06, 17h36, 19h06, 20h36, 22h06', horarios_sabado: '9h36, 11h36, 16h06, 17h36, 19h06', horarios_domingo: '9h36, 11h36, 16h36, 19h06' },
        { ponto_onibus: 'UBSF Di Nápoli', horarios_seg_sex: '5h37, 7h07, 8h37, 10h07, 11h37, 13h07, 14h37, 16h07, 17h37, 19h07, 20h37, 22h07', horarios_sabado: '9h37, 11h37, 16h07, 17h37, 19h07', horarios_domingo: '9h37, 11h37, 16h37, 19h07' },
        { ponto_onibus: 'Artur Gayotto', horarios_seg_sex: '5h38, 7h08, 8h38, 10h08, 11h38, 13h08, 14h38, 16h08, 17h38, 19h08, 20h38, 22h08', horarios_sabado: '9h39, 11h39, 16h09, 17h39, 19h09', horarios_domingo: '9h39, 11h39, 16h39, 19h09' },
        { ponto_onibus: 'Praça Beatriz', horarios_seg_sex: '5h39, 7h09, 8h39, 10h09, 11h39, 13h09, 14h39, 16h09, 17h39, 19h09, 20h39, 22h09', horarios_sabado: '9h40, 11h40, 16h10, 17h40, 19h10', horarios_domingo: '9h40, 11h40, 16h40, 19h10' },
        { ponto_onibus: 'Di Nápoli II', horarios_seg_sex: '5h40, 7h10, 8h40, 10h10, 11h40, 13h10, 14h40, 16h10, 17h40, 19h10, 20h40, 22h10', horarios_sabado: '9h41, 11h41, 16h11, 17h41, 19h11', horarios_domingo: '9h41, 11h41, 16h41, 19h11' },
        { ponto_onibus: 'Domênico Modanese', horarios_seg_sex: '5h41, 7h11, 8h41, 10h11, 11h41, 13h11, 14h41, 16h11, 17h41, 19h11, 20h41, 22h11', horarios_sabado: '9h42, 11h42, 16h12, 17h42, 19h12', horarios_domingo: '9h42, 11h42, 16h42, 19h12' },
        { ponto_onibus: 'Portal Di Napoli', horarios_seg_sex: '5h42, 7h12, 8h42, 10h12, 11h42, 13h12, 14h42, 16h12, 17h42, 19h12, 20h42, 22h12', horarios_sabado: '9h43, 11h43, 16h13, 17h43, 19h13', horarios_domingo: '9h43, 11h43, 16h43, 19h13' },
        { ponto_onibus: 'Praça Edílio Grando', horarios_seg_sex: '5h43, 7h13, 8h43, 10h13, 11h43, 13h13, 14h43, 16h13, 17h43, 19h13, 20h43, 22h13', horarios_sabado: '9h44, 11h44, 16h14, 17h44, 19h14', horarios_domingo: '9h44, 11h44, 16h44, 19h14' },
        { ponto_onibus: 'Leandro Nicolau', horarios_seg_sex: '5h44, 7h14, 8h44, 10h14, 11h44, 13h14, 14h44, 16h14, 17h44, 19h14, 20h44, 22h14', horarios_sabado: '9h45, 11h45, 16h15, 17h45, 19h15', horarios_domingo: '9h45, 11h45, 16h45, 19h15' },
        { ponto_onibus: 'John Robert Orr', horarios_seg_sex: '5h46, 7h16, 8h46, 10h16, 11h46, 13h16, 14h46, 16h16, 17h46, 19h16, 20h46, 22h16', horarios_sabado: '9h46, 11h46, 16h16, 17h46, 19h16', horarios_domingo: '9h46, 11h46, 16h46, 19h16' },
        { ponto_onibus: 'Albino Stefani', horarios_seg_sex: '5h47, 7h17, 8h47, 10h17, 11h47, 13h17, 14h47, 16h17, 17h47, 19h17, 20h47, 22h17', horarios_sabado: '9h47, 11h47, 16h17, 17h47, 19h17', horarios_domingo: '9h47, 11h47, 16h47, 19h17' },
        { ponto_onibus: 'Angelo Módulo', horarios_seg_sex: '5h48, 7h18, 8h48, 10h18, 11h48, 13h18, 14h48, 16h18, 17h48, 19h18, 20h48, 22h18', horarios_sabado: '9h49, 11h49, 16h19, 17h49, 19h19', horarios_domingo: '9h49, 11h49, 16h49, 19h19' },
        { ponto_onibus: 'João Paulo II', horarios_seg_sex: '5h50, 7h20, 8h50, 10h20, 11h50, 13h20, 14h50, 16h20, 17h50, 19h20, 20h50, 22h20', horarios_sabado: '9h51, 11h51, 16h21, 17h51, 19h21', horarios_domingo: '9h51, 11h51, 16h51, 19h21' },
        { ponto_onibus: 'Praça das Mangueiras', horarios_seg_sex: '5h51, 7h21, 8h51, 10h21, 11h51, 13h21, 14h51, 16h21, 17h51, 19h21, 20h51, 22h21', horarios_sabado: '9h52, 11h52, 16h22, 17h52, 19h22', horarios_domingo: '9h52, 11h52, 16h52, 19h22' },
        { ponto_onibus: 'Lar São José', horarios_seg_sex: '5h52, 7h22, 8h52, 10h22, 11h52, 13h22, 14h52, 16h22, 17h52, 19h22, 20h52, 22h22', horarios_sabado: '9h53, 11h53, 16h23, 17h53, 19h23', horarios_domingo: '9h53, 11h53, 16h53, 19h23' },
        { ponto_onibus: 'Jardim Esplanada', horarios_seg_sex: '5h54, 7h24, 8h54, 10h24, 11h54, 13h24, 14h54, 16h24, 17h54, 19h24, 20h54, 22h24', horarios_sabado: '9h54, 11h54, 16h24, 17h54, 19h24', horarios_domingo: '9h54, 11h54, 16h54, 19h24' },
        { ponto_onibus: 'Portal dos Pilares', horarios_seg_sex: '5h55, 7h25, 8h55, 10h25, 11h55, 13h25, 14h55, 16h25, 17h55, 19h25, 20h55, 22h25', horarios_sabado: '9h55, 11h55, 16h25, 17h55, 19h25', horarios_domingo: '9h55, 11h55, 16h55, 19h25' },
        { ponto_onibus: 'Corradi II', horarios_seg_sex: '5h56, 7h26, 8h56, 10h26, 11h56, 13h26, 14h56, 16h26, 17h56, 19h26, 20h56, 22h26', horarios_sabado: '9h56, 11h56, 16h26, 17h56, 19h26', horarios_domingo: '9h56, 11h56, 16h56, 19h26' },
        { ponto_onibus: 'Policlínica', horarios_seg_sex: '5h57, 7h27, 8h57, 10h27, 11h57, 13h27, 14h57, 16h27, 17h57, 19h27, 20h57, 22h27', horarios_sabado: '9h57, 11h57, 16h27, 17h57, 19h27', horarios_domingo: '9h57, 11h57, 16h57, 19h27' },
    ],
    translado: [
        { ponto_onibus: 'TRANSLADO Loteamento Ribeiro', horarios_seg_sex: '6h30, 12h00, 17h00', horarios_sabado: '6h30, 12h00', observacao: 'Horário saindo da Rodoviária, indo ao Loteamento Ribeiro e retornando até a Rodoviária para utilização do Tarifa Zero.' },
    ]
};

const scheduleDisplay = document.getElementById('scheduleDisplay');
const searchInput = document.getElementById('searchInput');
const favoritePointsDisplay = document.getElementById('favoritePointsDisplay');
const favoritesCard = document.getElementById('favoritesCard');

let currentLineData = null; // Armazena os dados da linha atualmente selecionada

// Função para carregar favoritos do localStorage
function loadFavorites() {
    const favorites = localStorage.getItem('favoriteBusStops');
    return favorites ? JSON.parse(favorites) : [];
}

// Função para salvar favoritos no localStorage
function saveFavorites(favorites) {
    localStorage.setItem('favoriteBusStops', JSON.stringify(favorites));
    displayFavoritePoints(); // Atualiza a exibição dos favoritos
    updateFavoriteIcons(); // Garante que os ícones na tabela principal também se atualizem
}

// Função para adicionar/remover ponto dos favoritos
function toggleFavorite(line, pointName) {
    let favorites = loadFavorites();
    const existingIndex = favorites.findIndex(fav => fav.line === line && fav.ponto_onibus === pointName);

    if (existingIndex > -1) {
        // Remover dos favoritos
        favorites.splice(existingIndex, 1);
    } else {
        // Adicionar aos favoritos
        // Encontrar os dados completos do ponto para salvar
        const lineData = schedules[line];
        const pointData = lineData ? lineData.find(p => p.ponto_onibus === pointName) : null;
        if (pointData) {
            favorites.push({ line, ...pointData });
        }
    }
    saveFavorites(favorites);
}

// Função para exibir a tabela de horários
function displaySchedule(lineName) {
    scheduleDisplay.innerHTML = ''; // Limpa o conteúdo anterior
    const lineData = schedules[lineName];
    currentLineData = { name: lineName, data: lineData }; // Guarda os dados da linha selecionada

    if (!lineData) {
        scheduleDisplay.innerHTML = `<p class="text-center text-danger">Linha '${lineName}' não encontrada.</p>`;
        return;
    }

    let tableHTML = `<h3 class="text-center text-capitalize mb-3">${lineName.replace('_', ' ')}</h3>`;
    tableHTML += `
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Ponto de Ônibus</th>
                        <th>Segunda a Sexta</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody>
    `;

    const favorites = loadFavorites();

    lineData.forEach(ponto => {
        const isFavorited = favorites.some(fav => fav.line === lineName && fav.ponto_onibus === ponto.ponto_onibus);
        const favoriteClass = isFavorited ? 'bi-star-fill favorited' : 'bi-star';
        const domingo = ponto.horarios_domingo || 'Não informado';
        const observacao = ponto.observacao ? ` <small class="text-muted">(${ponto.observacao})</small>` : '';
        
        tableHTML += `
            <tr data-line-name="${lineName}" data-point-name="${ponto.ponto_onibus.toLowerCase()}" class="bus-stop-row">
                <td>
                    ${ponto.ponto_onibus}${observacao}
                    <i class="bi ${favoriteClass} favorite-icon" data-line="${lineName}" data-point="${ponto.ponto_onibus}"></i>
                </td>
                <td>${ponto.horarios_seg_sex}</td>
                <td>${ponto.horarios_sabado}</td>
                <td>${domingo}</td>
            </tr>
        `;
    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;
    scheduleDisplay.innerHTML = tableHTML;
    highlightPoint(); // Destaca o ponto se houver algo na busca

    // Adiciona event listener DELEGADO para os ícones de estrela
    // Isso é mais eficiente, pois um único listener lida com todos os cliques nas estrelas
    // mesmo as que são adicionadas dinamicamente.
    scheduleDisplay.removeEventListener('click', handleStarClick); // Remove o antigo para evitar duplicação
    scheduleDisplay.addEventListener('click', handleStarClick); // Adiciona o novo
}

// Handler para cliques nas estrelas
function handleStarClick(event) {
    if (event.target.classList.contains('favorite-icon')) {
        const line = event.target.dataset.line;
        const point = event.target.dataset.point;
        toggleFavorite(line, point);
    }
}

// Função para atualizar o estado dos ícones de estrela na tabela exibida
function updateFavoriteIcons() {
    // Itera sobre todos os ícones de estrela visíveis na tabela principal
    document.querySelectorAll('#scheduleDisplay .favorite-icon').forEach(icon => {
        const line = icon.dataset.line;
        const pointName = icon.dataset.point;
        const favorites = loadFavorites();
        const isFavorited = favorites.some(fav => fav.line === line && fav.ponto_onibus === pointName);
        
        if (isFavorited) {
            icon.classList.remove('bi-star');
            icon.classList.add('bi-star-fill', 'favorited');
        } else {
            icon.classList.remove('bi-star-fill', 'favorited');
            icon.classList.add('bi-star');
        }
    });

    // Itera sobre todos os ícones de estrela visíveis na seção de favoritos
    // (O event listener delegado já cuida da remoção do ícone quando desfavoritado dos favoritos)
    document.querySelectorAll('#favoritePointsDisplay .favorite-icon').forEach(icon => {
        const line = icon.dataset.line;
        const pointName = icon.dataset.point;
        const favorites = loadFavorites();
        const isFavorited = favorites.some(fav => fav.line === line && fav.ponto_onibus === pointName);
        
        if (isFavorited) {
            icon.classList.remove('bi-star');
            icon.classList.add('bi-star-fill', 'favorited');
        } else {
            // Se um ícone de favorito não está mais na lista de favoritos, mas por algum motivo ainda está no DOM,
            // garantimos que ele volte ao estado "não favoritado"
            icon.classList.remove('bi-star-fill', 'favorited');
            icon.classList.add('bi-star');
        }
    });
}


// Função para exibir os pontos favoritos
function displayFavoritePoints() {
    const favorites = loadFavorites();
    favoritePointsDisplay.innerHTML = ''; // Limpa o conteúdo anterior

    if (favorites.length === 0) {
        favoritePointsDisplay.innerHTML = '<p class="text-center text-muted">Nenhum ponto favorito ainda. Clique na estrela para adicionar!</p>';
        favoritesCard.style.display = 'none'; // Esconde o card se não houver favoritos
        return;
    }

    favoritesCard.style.display = 'block'; // Mostra o card de favoritos

    let favoritesTableHTML = `
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Ponto de Ônibus</th>
                        <th>Segunda a Sexta</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                        <th></th> </tr>
                </thead>
                <tbody>
    `;

    favorites.forEach(fav => {
        const domingo = fav.horarios_domingo || 'Não informado';
        const observacao = fav.observacao ? ` <small class="text-muted">(${fav.observacao})</small>` : '';
        
        favoritesTableHTML += `
            <tr data-line-name="${fav.line}" data-point-name="${fav.ponto_onibus.toLowerCase()}" class="favorite-point-item bus-stop-row">
                <td>
                    <span class="point-name">${fav.ponto_onibus}</span>
                    <small class="text-muted text-capitalize">(${fav.line.replace('_', ' ')})</small>
                    ${observacao}
                </td>
                <td>${fav.horarios_seg_sex}</td>
                <td>${fav.horarios_sabado}</td>
                <td>${domingo}</td>
                <td>
                    <i class="bi bi-star-fill favorited favorite-icon" data-line="${fav.line}" data-point="${fav.ponto_onibus}"></i>
                </td>
            </tr>
        `;
    });

    favoritesTableHTML += `
                </tbody>
            </table>
        </div>
    `;
    favoritePointsDisplay.innerHTML = favoritesTableHTML;

    // Adiciona event listener DELEGADO para os ícones de estrela na seção de favoritos
    favoritePointsDisplay.removeEventListener('click', handleStarClick); // Remove o antigo para evitar duplicação
    favoritePointsDisplay.addEventListener('click', handleStarClick); // Adiciona o novo
}


// Função para destacar o ponto de ônibus
function highlightPoint() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    // Seleciona todas as linhas da tabela que representam um ponto de ônibus
    const rows = scheduleDisplay.querySelectorAll('tbody tr.bus-stop-row');

    // Remove qualquer destaque anterior
    rows.forEach(row => {
        row.classList.remove('highlight');
    });

    if (searchTerm === '') {
        return; // Não faz nada se a busca estiver vazia
    }

    let firstHighlighted = null; // Para rolar até o primeiro destaque

    rows.forEach(row => {
        const pointName = row.dataset.pointName;
        if (pointName && pointName.includes(searchTerm)) {
            row.classList.add('highlight');
            if (!firstHighlighted) {
                firstHighlighted = row; // Salva a primeira linha destacada
            }
        }
    });

    // Rola até o primeiro ponto destacado, se houver
    if (firstHighlighted) {
        firstHighlighted.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Adiciona event listeners para os botões de linha
document.querySelectorAll('.btn[data-line]').forEach(button => {
    button.addEventListener('click', (event) => {
        const line = event.target.dataset.line;
        displaySchedule(line);
    });
});

// Adiciona event listener para o campo de busca (ao digitar)
searchInput.addEventListener('input', highlightPoint);

// Adiciona event listener para o campo de busca (ao pressionar Enter)
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        highlightPoint();
    }
});

// Exibir a linha azul por padrão ao carregar a página e carregar favoritos
document.addEventListener('DOMContentLoaded', () => {
    displayFavoritePoints(); // Carrega e exibe os favoritos ao carregar a página
    displaySchedule('azul');
});