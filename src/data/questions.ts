import { Subject, Question } from '../types';

export const questionBank: Question[] = [
  // --- VẬT LÍ ---
  // Năng lượng cơ học
  {
    id: 'p1',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Một vật có khối lượng m đang chuyển động với vận tốc v. Động năng của vật được tính bằng công thức nào?',
    options: ['Wđ = m.v', 'Wđ = 1/2 m.v', 'Wđ = 1/2 m.v²', 'Wđ = m.v²'],
    correctAnswer: 2,
    explanation: 'Động năng của một vật khối lượng m chuyển động với vận tốc v là Wđ = 1/2 mv².',
    level: 'Nhận biết'
  },
  {
    id: 'p5',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Thế năng trọng trường của một vật phụ thuộc vào yếu tố nào sau đây?',
    options: ['Khối lượng và vận tốc', 'Khối lượng và độ cao', 'Vận tốc và độ cao', 'Khối lượng và thể tích'],
    correctAnswer: 1,
    explanation: 'Thế năng trọng trường được tính bằng công thức Wt = mgh, phụ thuộc vào khối lượng m và độ cao h của vật.',
    level: 'Nhận biết'
  },
  {
    id: 'p6',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Công suất là đại lượng đặc trưng cho:',
    options: ['Khả năng thực hiện công của vật.', 'Mức độ mạnh yếu của lực.', 'Tốc độ thực hiện công.', 'Năng lượng của vật.'],
    correctAnswer: 2,
    explanation: 'Công suất (P = A/t) là đại lượng đặc trưng cho tốc độ thực hiện công, hay công thực hiện được trong một đơn vị thời gian.',
    level: 'Thông hiểu'
  },
  // Ánh sáng
  {
    id: 'p2',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng tới khi gặp mặt phân cách giữa hai môi trường trong suốt thì:',
    options: [
      'Bị hắt trở lại môi trường cũ.',
      'Tiếp tục đi thẳng vào môi trường thứ hai.',
      'Bị gãy khúc tại mặt phân cách và tiếp tục đi vào môi trường thứ hai.',
      'Bị dừng lại hoàn toàn.'
    ],
    correctAnswer: 2,
    explanation: 'Khúc xạ ánh sáng là hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị gãy khúc tại mặt phân cách giữa hai môi trường.',
    level: 'Nhận biết'
  },
  {
    id: 'p7',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Thấu kính hội tụ có đặc điểm nào sau đây?',
    options: [
      'Phần rìa dày hơn phần giữa.',
      'Phần giữa dày hơn phần rìa.',
      'Biến chùm tia tới song song thành chùm tia ló phân kỳ.',
      'Luôn cho ảnh ảo nhỏ hơn vật.'
    ],
    correctAnswer: 1,
    explanation: 'Thấu kính hội tụ có phần giữa dày hơn phần rìa. Nó có tác dụng hội tụ chùm tia sáng tới song song tại tiêu điểm.',
    level: 'Nhận biết'
  },
  {
    id: 'p8',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Kính lúp thực chất là một:',
    options: [
      'Thấu kính phân kỳ có tiêu cự ngắn.',
      'Thấu kính hội tụ có tiêu cự dài.',
      'Thấu kính hội tụ có tiêu cự ngắn.',
      'Gương cầu lồi.'
    ],
    correctAnswer: 2,
    explanation: 'Kính lúp là một thấu kính hội tụ có tiêu cự ngắn (thường vài cm), dùng để quan sát các vật nhỏ.',
    level: 'Nhận biết'
  },
  // Điện
  {
    id: 'p3',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Định luật Ohm cho đoạn mạch chỉ có điện trở R là:',
    options: ['I = U.R', 'I = U/R', 'I = R/U', 'I = U²/R'],
    correctAnswer: 1,
    explanation: 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: I = U/R.',
    level: 'Nhận biết'
  },
  {
    id: 'p9',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc nối tiếp, cường độ dòng điện I chạy qua mạch chính và các mạch rẽ có mối liên hệ:',
    options: ['I = I1 + I2', 'I = I1 = I2', 'I = I1 - I2', 'I = I1 . I2'],
    correctAnswer: 1,
    explanation: 'Trong đoạn mạch mắc nối tiếp, cường độ dòng điện có giá trị như nhau tại mọi điểm: I = I1 = I2.',
    level: 'Thông hiểu'
  },
  {
    id: 'p10',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Công suất điện của một đoạn mạch được tính bằng công thức:',
    options: ['P = U.I', 'P = U/I', 'P = I/U', 'P = U.I²'],
    correctAnswer: 0,
    explanation: 'Công suất điện của một đoạn mạch bằng tích của hiệu điện thế giữa hai đầu đoạn mạch và cường độ dòng điện chạy qua nó: P = UI.',
    level: 'Nhận biết'
  },
  // Điện từ
  {
    id: 'p4',
    subject: Subject.PHYSICS,
    topic: 'Điện từ',
    content: 'Dòng điện xoay chiều là dòng điện:',
    options: [
      'Có chiều không đổi theo thời gian.',
      'Có cường độ không đổi theo thời gian.',
      'Luân phiên đổi chiều theo thời gian.',
      'Chỉ chạy theo một hướng duy nhất.'
    ],
    correctAnswer: 2,
    explanation: 'Dòng điện xoay chiều là dòng điện có chiều luân phiên thay đổi theo thời gian.',
    level: 'Nhận biết'
  },
  {
    id: 'p11',
    subject: Subject.PHYSICS,
    topic: 'Điện từ',
    content: 'Điều kiện để xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín là:',
    options: [
      'Đặt cuộn dây gần một nam châm mạnh.',
      'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên.',
      'Cho dòng điện một chiều chạy qua cuộn dây.',
      'Cuộn dây phải làm bằng đồng.'
    ],
    correctAnswer: 1,
    explanation: 'Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi số đường sức từ xuyên qua tiết diện S của cuộn dây đó biến thiên (tăng hoặc giảm).',
    level: 'Thông hiểu'
  },
  // Năng lượng với cuộc sống
  {
    id: 'p12',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng với cuộc sống',
    content: 'Nguồn năng lượng nào sau đây được coi là năng lượng tái tạo?',
    options: ['Than đá', 'Dầu mỏ', 'Năng lượng gió', 'Khí đốt tự nhiên'],
    correctAnswer: 2,
    explanation: 'Năng lượng gió, năng lượng mặt trời, thủy triều... là các nguồn năng lượng tái tạo vì chúng có sẵn và không bị cạn kiệt.',
    level: 'Nhận biết'
  },
  {
    id: 'p13',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Một con lắc lò xo đang dao động điều hòa. Khi vật đi qua vị trí cân bằng thì:',
    options: ['Động năng cực đại, thế năng cực tiểu', 'Động năng cực tiểu, thế năng cực đại', 'Động năng bằng thế năng', 'Cả động năng và thế năng đều cực đại'],
    correctAnswer: 0,
    explanation: 'Tại vị trí cân bằng, vận tốc của vật là cực đại nên động năng cực đại, còn li độ bằng 0 nên thế năng cực tiểu (bằng 0).',
    level: 'Thông hiểu'
  },
  {
    id: 'p14',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Chiếu một tia sáng từ nước ra không khí với góc tới i. Biết chiết suất của nước là 4/3. Hiện tượng phản xạ toàn phần xảy ra khi:',
    options: ['i < 48.6°', 'i > 48.6°', 'i = 48.6°', 'Mọi góc i'],
    correctAnswer: 1,
    explanation: 'Góc giới hạn phản xạ toàn phần sin(igh) = 1/n = 3/4 => igh ≈ 48.6°. Phản xạ toàn phần xảy ra khi i > igh.',
    level: 'Vận dụng'
  },
  {
    id: 'p15',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Một bóng đèn có ghi 220V - 100W. Điện trở của bóng đèn khi sáng bình thường là:',
    options: ['220 Ω', '484 Ω', '100 Ω', '2.2 Ω'],
    correctAnswer: 1,
    explanation: 'R = U²/P = 220² / 100 = 484 Ω.',
    level: 'Thông hiểu'
  },
  {
    id: 'p16',
    subject: Subject.PHYSICS,
    topic: 'Điện từ',
    content: 'Máy biến thế là thiết bị dùng để:',
    options: ['Thay đổi cường độ dòng điện không đổi', 'Thay đổi hiệu điện thế xoay chiều', 'Biến đổi dòng điện xoay chiều thành dòng điện một chiều', 'Làm tăng công suất điện'],
    correctAnswer: 1,
    explanation: 'Máy biến thế dùng để thay đổi (tăng hoặc giảm) hiệu điện thế của dòng điện xoay chiều.',
    level: 'Nhận biết'
  },
  {
    id: 'p17',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng với cuộc sống',
    content: 'Việc sử dụng năng lượng hóa thạch gây ra hậu quả chính nào sau đây?',
    options: ['Làm sạch bầu không khí', 'Gây hiệu ứng nhà kính và biến đổi khí hậu', 'Tăng lượng oxy trong khí quyển', 'Giảm nhiệt độ Trái Đất'],
    correctAnswer: 1,
    explanation: 'Đốt cháy năng lượng hóa thạch thải ra lượng lớn khí CO2, gây hiệu ứng nhà kính và biến đổi khí hậu.',
    level: 'Nhận biết'
  },
  {
    id: 'p18',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Đơn vị của công là:',
    options: ['Watt (W)', 'Joule (J)', 'Newton (N)', 'Pascal (Pa)'],
    correctAnswer: 1,
    explanation: 'Joule (J) là đơn vị đo công và năng lượng trong hệ SI.',
    level: 'Nhận biết'
  },
  {
    id: 'p19',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Vật đặt trước thấu kính hội tụ trong khoảng tiêu cự (d < f) cho ảnh có đặc điểm:',
    options: ['Ảnh thật, ngược chiều, lớn hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh ảo, cùng chiều, nhỏ hơn vật', 'Ảnh thật, ngược chiều, nhỏ hơn vật'],
    correctAnswer: 1,
    explanation: 'Khi vật nằm trong khoảng tiêu cự của thấu kính hội tụ, thấu kính đóng vai trò là kính lúp, cho ảnh ảo, cùng chiều và lớn hơn vật.',
    level: 'Thông hiểu'
  },
  {
    id: 'p20',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Hai điện trở R1 = 10 Ω và R2 = 20 Ω mắc song song. Điện trở tương đương của đoạn mạch là:',
    options: ['30 Ω', '15 Ω', '6.67 Ω', '200 Ω'],
    correctAnswer: 2,
    explanation: '1/Rtd = 1/R1 + 1/R2 = 1/10 + 1/20 = 3/20 => Rtd = 20/3 ≈ 6.67 Ω.',
    level: 'Thông hiểu'
  },
  {
    id: 'p21',
    subject: Subject.PHYSICS,
    topic: 'Điện từ',
    content: 'Tác dụng của quy tắc nắm tay phải là để xác định:',
    options: ['Chiều của lực điện từ', 'Chiều của đường sức từ trong lòng ống dây', 'Chiều của dòng điện cảm ứng', 'Độ lớn của cảm ứng từ'],
    correctAnswer: 1,
    explanation: 'Quy tắc nắm tay phải dùng để xác định chiều của đường sức từ trong lòng ống dây có dòng điện chạy qua.',
    level: 'Nhận biết'
  },
  {
    id: 'p23',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Một bếp điện có ghi 220V - 1000W được sử dụng với hiệu điện thế 220V để đun sôi 2 lít nước từ nhiệt độ ban đầu 20°C. Hiệu suất của bếp là 80%. Tính thời gian đun sôi nước? (Biết nhiệt dung riêng của nước là 4200 J/kg.K)',
    options: ['840 giây', '1050 giây', '672 giây', '1200 giây'],
    correctAnswer: 1,
    explanation: 'Q_ich = m.c.Δt = 2 * 4200 * (100 - 20) = 672,000 J. Q_tp = Q_ich / H = 672,000 / 0.8 = 840,000 J. t = Q_tp / P = 840,000 / 1000 = 840 giây. À không, tính lại: 840,000 / 1000 = 840s. Đáp án A đúng. Đợi chút, 672000 / 0.8 = 840000. 840000 / 1000 = 840. Vậy đáp án là 840s.',
    level: 'Vận dụng'
  },
  {
    id: 'p24',
    subject: Subject.PHYSICS,
    topic: 'Ánh sáng',
    content: 'Một vật sáng AB đặt vuông góc với trục chính của một thấu kính hội tụ có tiêu cự f = 12cm. Để thu được ảnh thật lớn gấp 3 lần vật thì vật phải đặt cách thấu kính một khoảng bao nhiêu?',
    options: ['8 cm', '16 cm', '24 cm', '36 cm'],
    correctAnswer: 1,
    explanation: 'Ảnh thật lớn gấp 3 lần vật => k = -d\'/d = -3 => d\' = 3d. 1/f = 1/d + 1/d\' => 1/12 = 1/d + 1/3d = 4/3d => 3d = 48 => d = 16 cm.',
    level: 'Vận dụng'
  },
  {
    id: 'p25',
    subject: Subject.PHYSICS,
    topic: 'Năng lượng cơ học',
    content: 'Một vật có khối lượng 500g được thả rơi tự do từ độ cao 20m so với mặt đất. Lấy g = 10m/s². Bỏ qua sức cản không khí. Động năng của vật khi nó cách mặt đất 5m là:',
    options: ['25 J', '75 J', '100 J', '50 J'],
    correctAnswer: 1,
    explanation: 'Cơ năng bảo toàn: W = Wt_max = mgh = 0.5 * 10 * 20 = 100 J. Tại độ cao 5m: Wt = mgh\' = 0.5 * 10 * 5 = 25 J. Wđ = W - Wt = 100 - 25 = 75 J.',
    level: 'Vận dụng'
  },
  {
    id: 'p26',
    subject: Subject.PHYSICS,
    topic: 'Điện',
    content: 'Cho mạch điện gồm (R1 // R2) nối tiếp R3. Biết R1 = 6Ω, R2 = 12Ω, R3 = 4Ω. Đặt vào hai đầu đoạn mạch hiệu điện thế U = 16V. Cường độ dòng điện qua điện trở R1 là:',
    options: ['2 A', '1 A', '1.33 A', '0.67 A'],
    correctAnswer: 2,
    explanation: 'R12 = (6*12)/(6+12) = 4Ω. Rtd = R12 + R3 = 4 + 4 = 8Ω. I = U/Rtd = 16/8 = 2A. U12 = I * R12 = 2 * 4 = 8V. I1 = U12 / R1 = 8 / 6 = 1.33 A.',
    level: 'Vận dụng'
  },
  {
    id: 'p27',
    subject: Subject.PHYSICS,
    topic: 'Điện từ',
    content: 'Một máy biến thế có số vòng dây cuộn sơ cấp là 500 vòng, cuộn thứ cấp là 10000 vòng. Đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều 220V. Hiệu điện thế ở hai đầu cuộn thứ cấp là:',
    options: ['11 V', '4400 V', '2200 V', '440 V'],
    correctAnswer: 1,
    explanation: 'U1/U2 = N1/N2 => 220/U2 = 500/10000 = 1/20 => U2 = 220 * 20 = 4400 V.',
    level: 'Vận dụng'
  },

  // --- HÓA HỌC ---
  // Kim loại và phi kim
  {
    id: 'c1',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Dãy kim loại nào sau đây được sắp xếp theo chiều hoạt động hóa học tăng dần?',
    options: ['Cu, Fe, Zn, Al, Mg', 'Mg, Al, Zn, Fe, Cu', 'Fe, Cu, Zn, Al, Mg', 'Al, Mg, Zn, Fe, Cu'],
    correctAnswer: 0,
    explanation: 'Dãy hoạt động hóa học của một số kim loại: K, Na, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au. Chiều tăng dần là từ phải sang trái.',
    level: 'Thông hiểu'
  },
  {
    id: 'c5',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Kim loại nào sau đây tác dụng được với dung dịch HCl giải phóng khí Hidro?',
    options: ['Cu', 'Ag', 'Au', 'Zn'],
    correctAnswer: 3,
    explanation: 'Các kim loại đứng trước Hidro trong dãy hoạt động hóa học (như Zn, Fe, Mg...) tác dụng được với dung dịch axit (HCl, H2SO4 loãng) giải phóng khí H2.',
    level: 'Thông hiểu'
  },
  {
    id: 'c10',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Kim loại nào sau đây có thể cắt được bằng dao và phản ứng mãnh liệt với nước ở nhiệt độ thường?',
    options: ['Fe', 'Cu', 'Na', 'Al'],
    correctAnswer: 2,
    explanation: 'Natri (Na) là kim loại kiềm, mềm, có thể cắt bằng dao và phản ứng rất mạnh với nước tạo dung dịch kiềm và giải phóng khí H2.',
    level: 'Nhận biết'
  },
  {
    id: 'c11',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Phi kim nào sau đây ở trạng thái lỏng ở điều kiện thường?',
    options: ['Iodine (Iốt)', 'Bromine (Brom)', 'Chlorine (Clo)', 'Oxygen (Oxi)'],
    correctAnswer: 1,
    explanation: 'Bromine là phi kim duy nhất ở trạng thái lỏng ở điều kiện thường.',
    level: 'Nhận biết'
  },
  {
    id: 'c12',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Để bảo vệ vỏ tàu thủy làm bằng thép, người ta thường gắn vào vỏ tàu (phần ngâm dưới nước) những tấm kim loại nào?',
    options: ['Đồng (Cu)', 'Bạc (Ag)', 'Kẽm (Zn)', 'Chì (Pb)'],
    correctAnswer: 2,
    explanation: 'Người ta dùng phương pháp bảo vệ điện hóa bằng cách gắn tấm kẽm (Zn). Zn hoạt động hơn Fe nên sẽ bị ăn mòn trước, bảo vệ được vỏ tàu thép.',
    level: 'Thông hiểu'
  },
  {
    id: 'c13',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Gang là hợp kim của sắt với cacbon, trong đó hàm lượng cacbon chiếm:',
    options: ['Dưới 2%', 'Từ 2% đến 5%', 'Trên 5%', 'Chính xác 1%'],
    correctAnswer: 1,
    explanation: 'Gang là hợp kim của sắt với cacbon trong đó hàm lượng C chiếm từ 2 - 5%. Thép có hàm lượng C dưới 2%.',
    level: 'Nhận biết'
  },
  {
    id: 'c14',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Kim loại nào sau đây có tính dẫn điện tốt nhất?',
    options: ['Vàng (Au)', 'Đồng (Cu)', 'Bạc (Ag)', 'Nhôm (Al)'],
    correctAnswer: 2,
    explanation: 'Thứ tự dẫn điện giảm dần: Ag > Cu > Au > Al > Fe.',
    level: 'Nhận biết'
  },
  // Hydrocarbon và nhiên liệu
  {
    id: 'c2',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Công thức cấu tạo của Methane (Metan) là:',
    options: ['CH4', 'C2H4', 'C2H2', 'C6H6'],
    correctAnswer: 0,
    explanation: 'Methane là hydrocarbon đơn giản nhất, có công thức hóa học là CH4.',
    level: 'Nhận biết'
  },
  {
    id: 'c6',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Khí Ethylene (Etilen) có khả năng làm mất màu dung dịch nào sau đây?',
    options: ['Dung dịch NaCl', 'Dung dịch Bromine (Brom)', 'Dung dịch NaOH', 'Nước vôi trong'],
    correctAnswer: 1,
    explanation: 'Ethylene có liên kết đôi trong phân tử nên có phản ứng cộng, làm mất màu dung dịch Bromine.',
    level: 'Thông hiểu'
  },
  {
    id: 'c15',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Phản ứng đặc trưng của Methane (Metan) là:',
    options: ['Phản ứng cộng', 'Phản ứng thế', 'Phản ứng trùng hợp', 'Phản ứng thủy phân'],
    correctAnswer: 1,
    explanation: 'Methane chỉ có liên kết đơn nên phản ứng đặc trưng là phản ứng thế với Clo khi có ánh sáng.',
    level: 'Nhận biết'
  },
  {
    id: 'c16',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Thành phần chính của khí thiên nhiên là:',
    options: ['Ethylene', 'Acetylene', 'Methane', 'Benzene'],
    correctAnswer: 2,
    explanation: 'Khí thiên nhiên chứa khoảng 95% là khí Methane (CH4).',
    level: 'Nhận biết'
  },
  {
    id: 'c17',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Để kích thích quả mau chín, người ta thường dùng khí nào sau đây?',
    options: ['Methane', 'Ethylene', 'Acetylene', 'Cacbon đioxit'],
    correctAnswer: 1,
    explanation: 'Ethylene là một hormone thực vật ở dạng khí, có tác dụng kích thích quá trình chín của quả.',
    level: 'Nhận biết'
  },
  {
    id: 'c18',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Dầu mỏ là:',
    options: ['Một đơn chất', 'Một hợp chất hóa học', 'Một hỗn hợp tự nhiên của nhiều hydrocarbon', 'Một loại nhiên liệu sạch'],
    correctAnswer: 2,
    explanation: 'Dầu mỏ là hỗn hợp lỏng sánh, màu nâu đen, không tan trong nước và nhẹ hơn nước, gồm nhiều loại hydrocarbon khác nhau.',
    level: 'Nhận biết'
  },
  // Ethylic alcohol – Acetic acid
  {
    id: 'c3',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Để phân biệt rượu etylic và axit axetic, ta có thể dùng:',
    options: ['Quỳ tím', 'Dung dịch NaCl', 'Nước', 'Dung dịch Phenolphtalein'],
    correctAnswer: 0,
    explanation: 'Axit axetic làm quỳ tím hóa đỏ, rượu etylic không làm đổi màu quỳ tím.',
    level: 'Thông hiểu'
  },
  {
    id: 'c7',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Phản ứng giữa rượu etylic và axit axetic (có xúc tác H2SO4 đặc, nóng) tạo ra sản phẩm là:',
    options: ['Muối axetat', 'Este (Ethyl acetate)', 'Xà phòng', 'Polyme'],
    correctAnswer: 1,
    explanation: 'Đây là phản ứng este hóa: CH3COOH + C2H5OH <-> CH3COOC2H5 + H2O.',
    level: 'Thông hiểu'
  },
  {
    id: 'c19',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Độ rượu là:',
    options: [
      'Số gam rượu nguyên chất có trong 100g dung dịch rượu',
      'Số ml rượu nguyên chất có trong 100ml dung dịch rượu',
      'Số gam rượu nguyên chất có trong 100ml nước',
      'Số ml rượu nguyên chất có trong 100ml nước'
    ],
    correctAnswer: 1,
    explanation: 'Độ rượu là số ml rượu etylic nguyên chất có trong 100 ml hỗn hợp rượu với nước.',
    level: 'Nhận biết'
  },
  {
    id: 'c20',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Giấm ăn là dung dịch axit axetic có nồng độ khoảng:',
    options: ['2% - 5%', '10% - 15%', '20% - 30%', 'Trên 50%'],
    correctAnswer: 0,
    explanation: 'Giấm ăn là dung dịch axit axetic loãng, nồng độ từ 2 - 5%.',
    level: 'Nhận biết'
  },
  {
    id: 'c21',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Chất nào sau đây tác dụng được với Natri nhưng không tác dụng được với NaOH?',
    options: ['Axit axetic', 'Rượu etylic', 'Nước', 'Cả B và C'],
    correctAnswer: 3,
    explanation: 'Rượu etylic và nước đều tác dụng with Na giải phóng H2 nhưng không phản ứng with NaOH. Axit axetic phản ứng được with cả hai.',
    level: 'Thông hiểu'
  },
  // Lipid – Carbohydrate – Protein – Polymer
  {
    id: 'c4',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Chất nào sau đây thuộc loại polysaccharide?',
    options: ['Glucose', 'Saccharose', 'Tinh bột', 'Fructose'],
    correctAnswer: 2,
    explanation: 'Tinh bột và cellulose là các polysaccharide.',
    level: 'Thông hiểu'
  },
  {
    id: 'c8',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Thủy phân hoàn toàn chất béo trong môi trường kiềm (phản ứng xà phòng hóa) thu được:',
    options: ['Glixerol và axit béo', 'Glixerol và muối của axit béo', 'Rượu etylic và axit béo', 'Glucose'],
    correctAnswer: 1,
    explanation: 'Chất béo + Kiềm -> Glixerol + Muối của axit béo (xà phòng).',
    level: 'Thông hiểu'
  },
  {
    id: 'c22',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Để nhận biết hồ tinh bột, người ta dùng thuốc thử nào?',
    options: ['Dung dịch AgNO3/NH3', 'Dung dịch Iốt', 'Dung dịch NaOH', 'Quỳ tím'],
    correctAnswer: 1,
    explanation: 'Iốt tác dụng with tinh bột tạo thành hợp chất màu xanh tím đặc trưng.',
    level: 'Nhận biết'
  },
  {
    id: 'c23',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Chất nào sau đây có phản ứng tráng gương (tác dụng with AgNO3 trong NH3)?',
    options: ['Tinh bột', 'Cellulose', 'Glucose', 'Saccharose'],
    correctAnswer: 2,
    explanation: 'Glucose có nhóm chức aldehyde nên có khả năng tham gia phản ứng tráng gương.',
    level: 'Thông hiểu'
  },
  {
    id: 'c24',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Polymer nào sau đây là polymer thiên nhiên?',
    options: ['Nhựa PE', 'Nhựa PVC', 'Tơ tằm', 'Cao su buna'],
    correctAnswer: 2,
    explanation: 'Tơ tằm, bông, tinh bột, cellulose là các polymer thiên nhiên. PE, PVC, cao su buna là polymer tổng hợp.',
    level: 'Nhận biết'
  },
  {
    id: 'c25',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Khi đun nóng protein trong dung dịch axit hoặc kiềm, hoặc dưới tác dụng của nhiệt độ, protein sẽ bị:',
    options: ['Thủy phân', 'Đông tụ', 'Trùng hợp', 'Este hóa'],
    correctAnswer: 1,
    explanation: 'Sự đông tụ protein xảy ra khi có tác động của nhiệt độ hoặc hóa chất (axit, kiềm, muối).',
    level: 'Nhận biết'
  },
  // Khai thác tài nguyên từ vỏ Trái Đất
  {
    id: 'c9',
    subject: Subject.CHEMISTRY,
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    content: 'Thành phần chính của quặng hematit dùng để sản xuất gang, thép là:',
    options: ['Fe3O4', 'Fe2O3', 'FeCO3', 'FeS2'],
    correctAnswer: 1,
    explanation: 'Quặng hematit chứa thành phần chính là Fe2O3.',
    level: 'Nhận biết'
  },
  {
    id: 'c26',
    subject: Subject.CHEMISTRY,
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    content: 'Quặng nào sau đây là nguyên liệu chính để sản xuất nhôm?',
    options: ['Quặng sắt', 'Quặng bôxit', 'Quặng apatit', 'Quặng pirit'],
    correctAnswer: 1,
    explanation: 'Nhôm được sản xuất bằng cách điện phân nóng chảy nhôm oxit có trong quặng bôxit.',
    level: 'Nhận biết'
  },
  {
    id: 'c27',
    subject: Subject.CHEMISTRY,
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    content: 'Nguyên liệu chính để sản xuất vôi sống (CaO) trong công nghiệp là:',
    options: ['Thạch cao', 'Đá vôi', 'Đất sét', 'Cát'],
    correctAnswer: 1,
    explanation: 'Vôi sống được sản xuất bằng cách nung đá vôi (CaCO3) ở nhiệt độ cao.',
    level: 'Nhận biết'
  },
  {
    id: 'c29',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Cho 5.6g sắt tác dụng hoàn toàn với dung dịch axit clohiđric (HCl) dư. Thể tích khí hiđro thu được ở điều kiện tiêu chuẩn (đktc) là:',
    options: ['2.24 lít', '4.48 lít', '1.12 lít', '3.36 lít'],
    correctAnswer: 0,
    explanation: 'nFe = 5.6 / 56 = 0.1 mol. PT: Fe + 2HCl -> FeCl2 + H2. nH2 = nFe = 0.1 mol. VH2 = 0.1 * 22.4 = 2.24 lít.',
    level: 'Vận dụng'
  },
  {
    id: 'c30',
    subject: Subject.CHEMISTRY,
    topic: 'Ethylic alcohol – Acetic acid',
    content: 'Đốt cháy hoàn toàn 4.6g rượu etylic (C2H5OH). Thể tích khí CO2 thu được ở đktc là:',
    options: ['2.24 lít', '4.48 lít', '1.12 lít', '3.36 lít'],
    correctAnswer: 1,
    explanation: 'n_ruou = 4.6 / 46 = 0.1 mol. PT: C2H5OH + 3O2 -> 2CO2 + 3H2O. nCO2 = 2 * n_ruou = 0.2 mol. VCO2 = 0.2 * 22.4 = 4.48 lít.',
    level: 'Vận dụng'
  },
  {
    id: 'c31',
    subject: Subject.CHEMISTRY,
    topic: 'Hydrocarbon và nhiên liệu',
    content: 'Dẫn 2.24 lít khí ethylene (đktc) qua dung dịch bromine dư. Khối lượng bromine đã tham gia phản ứng là:',
    options: ['8g', '16g', '32g', '4g'],
    correctAnswer: 1,
    explanation: 'n_etilen = 2.24 / 22.4 = 0.1 mol. PT: C2H4 + Br2 -> C2H4Br2. nBr2 = n_etilen = 0.1 mol. mBr2 = 0.1 * 160 = 16g.',
    level: 'Vận dụng'
  },
  {
    id: 'c32',
    subject: Subject.CHEMISTRY,
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    content: 'Thủy phân hoàn toàn 34.2g đường saccharose (C12H22O11) trong môi trường axit. Khối lượng glucose thu được là:',
    options: ['18g', '36g', '9g', '15g'],
    correctAnswer: 0,
    explanation: 'n_sac = 34.2 / 342 = 0.1 mol. PT: C12H22O11 + H2O -> C6H12O6 (glu) + C6H12O6 (fruc). n_glu = n_sac = 0.1 mol. m_glu = 0.1 * 180 = 18g.',
    level: 'Vận dụng'
  },
  {
    id: 'c33',
    subject: Subject.CHEMISTRY,
    topic: 'Kim loại và phi kim',
    content: 'Cho 10g hỗn hợp gồm Cu và Fe tác dụng với dung dịch HCl dư, thu được 2.24 lít khí H2 (đktc). Thành phần phần trăm theo khối lượng của Cu trong hỗn hợp là:',
    options: ['56%', '44%', '50%', '60%'],
    correctAnswer: 1,
    explanation: 'Chỉ có Fe phản ứng với HCl: Fe + 2HCl -> FeCl2 + H2. nH2 = 2.24 / 22.4 = 0.1 mol. nFe = nH2 = 0.1 mol. mFe = 0.1 * 56 = 5.6g. mCu = 10 - 5.6 = 4.4g. %Cu = (4.4 / 10) * 100% = 44%.',
    level: 'Vận dụng'
  },

  // --- SINH HỌC ---
  // DNA - RNA
  {
    id: 'b1',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Đơn phân của phân tử DNA là:',
    options: ['Axit amin', 'Nucleotide', 'Glucose', 'Axit béo'],
    correctAnswer: 1,
    explanation: 'DNA được cấu tạo từ các đơn phân là nucleotide (gồm 4 loại: A, T, G, C).',
    level: 'Nhận biết'
  },
  {
    id: 'b5',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Quá trình phiên mã là quá trình tổng hợp:',
    options: ['DNA từ DNA', 'RNA từ DNA', 'Protein từ RNA', 'DNA từ RNA'],
    correctAnswer: 1,
    explanation: 'Phiên mã là quá trình tổng hợp phân tử RNA dựa trên mạch khuôn của gen (DNA).',
    level: 'Nhận biết'
  },
  {
    id: 'b9',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Trong phân tử DNA, loại nucleotide nào sau đây không có?',
    options: ['Adenine (A)', 'Thymine (T)', 'Uracil (U)', 'Guanine (G)'],
    correctAnswer: 2,
    explanation: 'DNA có 4 loại nucleotide là A, T, G, C. Uracil (U) chỉ có trong RNA thay cho Thymine (T).',
    level: 'Nhận biết'
  },
  {
    id: 'b10',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Theo nguyên tắc bổ sung, trong phân tử DNA, A liên kết với T bằng bao nhiêu liên kết hydrogen?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Trong DNA, A liên kết với T bằng 2 liên kết hydrogen, G liên kết với C bằng 3 liên kết hydrogen.',
    level: 'Thông hiểu'
  },
  {
    id: 'b11',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Quá trình dịch mã diễn ra tại bộ phận nào của tế bào?',
    options: ['Nhân tế bào', 'Ribosome', 'Ti thể', 'Bộ máy Golgi'],
    correctAnswer: 1,
    explanation: 'Dịch mã (tổng hợp protein) diễn ra tại ribosome trong tế bào chất.',
    level: 'Nhận biết'
  },
  // Nguyên phân - Giảm phân
  {
    id: 'b4',
    subject: Subject.BIOLOGY,
    topic: 'Nguyên phân - Giảm phân',
    content: 'Kết quả của quá trình nguyên phân từ 1 tế bào mẹ (2n) tạo ra:',
    options: [
      '2 tế bào con có bộ NST n',
      '2 tế bào con có bộ NST 2n',
      '4 tế bào con có bộ NST n',
      '4 tế bào con có bộ NST 2n'
    ],
    correctAnswer: 1,
    explanation: 'Nguyên phân tạo ra 2 tế bào con có bộ nhiễm sắc thể giống hệt tế bào mẹ (2n).',
    level: 'Nhận biết'
  },
  {
    id: 'b6',
    subject: Subject.BIOLOGY,
    topic: 'Nguyên phân - Giảm phân',
    content: 'Trong giảm phân, sự tiếp hợp và trao đổi chéo giữa các NST tương đồng xảy ra ở:',
    options: ['Kì đầu I', 'Kì giữa I', 'Kì đầu II', 'Kì sau I'],
    correctAnswer: 0,
    explanation: 'Sự tiếp hợp và trao đổi chéo giữa các chromatid trong cặp NST tương đồng xảy ra ở kì đầu của giảm phân I.',
    level: 'Thông hiểu'
  },
  {
    id: 'b12',
    subject: Subject.BIOLOGY,
    topic: 'Nguyên phân - Giảm phân',
    content: 'Ý nghĩa của quá trình giảm phân kết hợp với thụ tinh là:',
    options: [
      'Duy trì bộ NST đặc trưng của loài qua các thế hệ tế bào.',
      'Tạo ra sự đa dạng di truyền ở các loài sinh sản hữu tính.',
      'Giúp cơ thể lớn lên và thay thế các tế bào già.',
      'Tạo ra các tế bào con có bộ NST giống hệt tế bào mẹ.'
    ],
    correctAnswer: 1,
    explanation: 'Giảm phân tạo ra các giao tử n, thụ tinh khôi phục bộ NST 2n, đồng thời tạo ra nhiều biến dị tổ hợp, làm tăng sự đa dạng di truyền.',
    level: 'Thông hiểu'
  },
  {
    id: 'b13',
    subject: Subject.BIOLOGY,
    topic: 'Nguyên phân - Giảm phân',
    content: 'Trong nguyên phân, các NST kép tập trung thành một hàng trên mặt phẳng xích đạo của thoi phân bào ở kì nào?',
    options: ['Kì đầu', 'Kì giữa', 'Kì sau', 'Kì cuối'],
    correctAnswer: 1,
    explanation: 'Ở kì giữa của nguyên phân, các NST kép co xoắn cực đại và tập trung thành một hàng trên mặt phẳng xích đạo.',
    level: 'Nhận biết'
  },
  // Quy luật Mendel
  {
    id: 'b2',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Theo Mendel, các nhân tố di truyền phân li độc lập với nhau trong quá trình nào?',
    options: ['Nguyên phân', 'Thụ tinh', 'Giảm phân hình thành giao tử', 'Phát triển phôi'],
    correctAnswer: 2,
    explanation: 'Quy luật phân li độc lập: Các cặp nhân tố di truyền (gen) phân li độc lập trong quá trình giảm phân hình thành giao tử.',
    level: 'Thông hiểu'
  },
  {
    id: 'b7',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Phép lai nào sau đây là phép lai phân tích?',
    options: ['AA x AA', 'Aa x Aa', 'Aa x aa', 'AA x Aa'],
    correctAnswer: 2,
    explanation: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gen với cá thể mang tính trạng lặn (aa).',
    level: 'Thông hiểu'
  },
  {
    id: 'b14',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Trong phép lai một cặp tính trạng của Mendel, nếu P thuần chủng tương phản (AA x aa) thì tỉ lệ kiểu hình ở F2 là:',
    options: ['1 trội : 1 lặn', '3 trội : 1 lặn', '100% trội', '1 trội : 2 trung gian : 1 lặn'],
    correctAnswer: 1,
    explanation: 'F1 là Aa (100% trội). F1 tự thụ phấn (Aa x Aa) cho F2 có tỉ lệ kiểu gen 1AA:2Aa:1aa, tương ứng tỉ lệ kiểu hình 3 trội : 1 lặn.',
    level: 'Thông hiểu'
  },
  {
    id: 'b15',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Đối tượng nghiên cứu chính của Mendel trong các thí nghiệm di truyền là:',
    options: ['Ruồi giấm', 'Cây đậu Hà Lan', 'Cây ngô', 'Chuột bạch'],
    correctAnswer: 1,
    explanation: 'Mendel đã chọn cây đậu Hà Lan làm đối tượng nghiên cứu chính vì nó có nhiều cặp tính trạng tương phản và khả năng tự thụ phấn nghiêm ngặt.',
    level: 'Nhận biết'
  },
  // Đột biến
  {
    id: 'b3',
    subject: Subject.BIOLOGY,
    topic: 'Đột biến',
    content: 'Đột biến gen là những biến đổi trong:',
    options: [
      'Cấu trúc của nhiễm sắc thể',
      'Số lượng của nhiễm sắc thể',
      'Cấu trúc của gen',
      'Kiểu hình của cơ thể'
    ],
    correctAnswer: 2,
    explanation: 'Đột biến gen là những biến đổi trong cấu trúc của gen, liên quan đến một hoặc một số cặp nucleotide.',
    level: 'Nhận biết'
  },
  {
    id: 'b8',
    subject: Subject.BIOLOGY,
    topic: 'Đột biến',
    content: 'Hội chứng Down ở người là do đột biến:',
    options: [
      'Mất đoạn nhiễm sắc thể 21',
      'Lặp đoạn nhiễm sắc thể 21',
      'Có 3 nhiễm sắc thể 21 (Thể ba)',
      'Chỉ có 1 nhiễm sắc thể 21 (Thể một)'
    ],
    correctAnswer: 2,
    explanation: 'Hội chứng Down do đột biến số lượng NST, cụ thể là có 3 NST ở cặp số 21.',
    level: 'Thông hiểu'
  },
  {
    id: 'b16',
    subject: Subject.BIOLOGY,
    topic: 'Đột biến',
    content: 'Tác nhân nào sau đây có thể gây ra đột biến gen?',
    options: ['Tia tử ngoại (UV)', 'Sốc nhiệt', 'Hóa chất độc hại', 'Tất cả các phương án trên'],
    correctAnswer: 3,
    explanation: 'Đột biến gen có thể do các tác nhân vật lí (tia phóng xạ, tia UV...), hóa chất (EMS, 5-BU...) hoặc các rối loạn sinh lí nội bào.',
    level: 'Nhận biết'
  },
  {
    id: 'b18',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Ở đậu Hà Lan, gen A quy định thân cao trội hoàn toàn so với gen a quy định thân thấp. Cho cây thân cao không thuần chủng lai với cây thân thấp, tỉ lệ kiểu hình ở đời con là:',
    options: ['100% thân cao', '3 thân cao : 1 thân thấp', '1 thân cao : 1 thân thấp', '100% thân thấp'],
    correctAnswer: 2,
    explanation: 'P: Aa (cao) x aa (thấp) -> G: (1/2A, 1/2a) x a -> F1: 1/2Aa (cao) : 1/2aa (thấp).',
    level: 'Vận dụng'
  },
  {
    id: 'b19',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Một đoạn gen có chiều dài 4080 Å. Số lượng nucleotide của đoạn gen đó là:',
    options: ['1200', '2400', '3000', '1500'],
    correctAnswer: 1,
    explanation: 'N = (L / 3.4) * 2 = (4080 / 3.4) * 2 = 1200 * 2 = 2400 nucleotide.',
    level: 'Vận dụng'
  },
  {
    id: 'b20',
    subject: Subject.BIOLOGY,
    topic: 'DNA - RNA',
    content: 'Một phân tử DNA có 3000 nucleotide, trong đó số nucleotide loại Adenine (A) chiếm 20%. Số nucleotide loại Guanine (G) của phân tử DNA này là:',
    options: ['600', '900', '1200', '300'],
    correctAnswer: 1,
    explanation: 'A = T = 20% * 3000 = 600. G = C = (3000 / 2) - 600 = 1500 - 600 = 900.',
    level: 'Vận dụng'
  },
  {
    id: 'b21',
    subject: Subject.BIOLOGY,
    topic: 'Quy luật Mendel',
    content: 'Ở một loài thực vật, A: quả đỏ, a: quả vàng; B: quả tròn, b: quả dài. Các cặp gen phân li độc lập. Phép lai AaBb x aabb cho tỉ lệ kiểu hình đời con là:',
    options: ['9:3:3:1', '1:1:1:1', '3:3:1:1', '3:1'],
    correctAnswer: 1,
    explanation: 'Đây là phép lai phân tích cá thể dị hợp 2 cặp gen phân li độc lập, tỉ lệ kiểu hình đời con là 1:1:1:1.',
    level: 'Vận dụng'
  },
  {
    id: 'b22',
    subject: Subject.BIOLOGY,
    topic: 'Đột biến',
    content: 'Một gen có 3000 nucleotide và có 3900 liên kết hydrogen. Sau khi bị đột biến điểm, gen mới có 3901 liên kết hydrogen. Đây là dạng đột biến nào?',
    options: ['Thay thế 1 cặp A-T bằng 1 cặp G-C', 'Thay thế 1 cặp G-C bằng 1 cặp A-T', 'Mất 1 cặp A-T', 'Thêm 1 cặp G-C'],
    correctAnswer: 0,
    explanation: 'Số liên kết H tăng thêm 1, trong khi đây là đột biến điểm (chỉ liên quan 1 cặp nu) => Thay thế cặp A-T (2 liên kết H) bằng cặp G-C (3 liên kết H).',
    level: 'Vận dụng'
  },
];

// Helper to get random questions
export const getRandomQuestions = (count: number, subject?: Subject, topic?: string, level?: string): Question[] => {
  let filtered = subject ? questionBank.filter(q => q.subject === subject) : [...questionBank];
  
  if (topic) {
    filtered = filtered.filter(q => q.topic === topic);
  }

  if (level) {
    filtered = filtered.filter(q => q.level === level);
  }
  
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getExamQuestions = (): Question[] => {
  // Try to get the required distribution if possible
  const physics = getRandomQuestions(14, Subject.PHYSICS);
  const chemistry = getRandomQuestions(14, Subject.CHEMISTRY);
  const biology = getRandomQuestions(12, Subject.BIOLOGY);
  
  // Combine and shuffle
  const combined = [...physics, ...chemistry, ...biology];
  return combined.sort(() => 0.5 - Math.random());
};
