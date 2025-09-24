var group__group__mtb__ipc =
[
    [ "IPC Results", "group__group__ipc__results.html", "group__group__ipc__results" ],
    [ "mtb_ipc_semaphore_config_t", "group__group__mtb__ipc.html#structmtb__ipc__semaphore__config__t", [
      [ "preemptable", "group__group__mtb__ipc.html#a6d348566868f397edc490ff7a94c283c", null ],
      [ "semaphore_num", "group__group__mtb__ipc.html#aa53f2f3062bbca73310b460f4880be9e", null ]
    ] ],
    [ "mtb_ipc_mbox_config_t", "group__group__mtb__ipc.html#structmtb__ipc__mbox__config__t", [
      [ "mailbox_idx", "group__group__mtb__ipc.html#a2bdca6a92ab3168d392a1b8d7fcce827", null ],
      [ "read_semaphore_num", "group__group__mtb__ipc.html#afbb9a97b62d7bdc147cb7bff9ef79996", null ],
      [ "write_semaphore_num", "group__group__mtb__ipc.html#aaf8fdad9891ee0685c8b16e45e33246c", null ]
    ] ],
    [ "mtb_ipc_queue_config_t", "group__group__mtb__ipc.html#structmtb__ipc__queue__config__t", [
      [ "channel_num", "group__group__mtb__ipc.html#aa24e02827376878e29ddec00dc34b34d", null ],
      [ "queue_num", "group__group__mtb__ipc.html#a444bffef27a47784119f0b653c12e076", null ],
      [ "max_num_items", "group__group__mtb__ipc.html#aefae081fd929e96a6f339098e6c67de3", null ],
      [ "item_size", "group__group__mtb__ipc.html#a34005034cb251a9c15adfbf134e1e021", null ],
      [ "queue_pool", "group__group__mtb__ipc.html#adbd56c721841b0104cf6fb302c717627", null ],
      [ "semaphore_num", "group__group__mtb__ipc.html#a1cb175b3754a44a41eae83bb47355041", null ]
    ] ],
    [ "mtb_ipc_config_t", "group__group__mtb__ipc.html#structmtb__ipc__config__t", [
      [ "internal_channel_index", "group__group__mtb__ipc.html#a164ea7bb82718cc0f0085b5cc14582c3", null ],
      [ "semaphore_irq", "group__group__mtb__ipc.html#aa7d299d916bcf161d0e22be480471be7", null ],
      [ "queue_irq", "group__group__mtb__ipc.html#a35e2b28d983e9debccc99b13192236d9", null ],
      [ "semaphore_num", "group__group__mtb__ipc.html#aa6290f0ea4244e2c9893a831a7ea8607", null ]
    ] ],
    [ "MTB_IPC_QUEUE_ALL_EVENTS", "group__group__mtb__ipc.html#ga07b24cd64544a704d42ee9018c328ec4", null ],
    [ "MTB_IPC_NEVER_TIMEOUT", "group__group__mtb__ipc.html#ga08f62ac94b3c25ac661e03da5e0203ed", null ],
    [ "MTB_IPC_NEVER_TIMEOUT_MS", "group__group__mtb__ipc.html#gac1f6aa8fd9de548360a7d529c9ec203d", null ],
    [ "mtb_ipc_queue_event_callback_t", "group__group__mtb__ipc.html#gab4ff4e18815fa70e9faa6415eb70d2f4", null ],
    [ "mtb_ipc_mbox_event_callback_t", "group__group__mtb__ipc.html#ga8ba9704f1475ca16a479816f96be37c6", null ],
    [ "mtb_ipc_mbox_event_t", "group__group__mtb__ipc.html#ga2d232d3e42b46cce1d39c0551a01a449", [
      [ "MTB_IPC_MBOX_FULL", "group__group__mtb__ipc.html#gga2d232d3e42b46cce1d39c0551a01a449a884930d86ccab4a6ec74a120667fffac", null ],
      [ "MTB_IPC_MBOX_EMPTY", "group__group__mtb__ipc.html#gga2d232d3e42b46cce1d39c0551a01a449a6c07728414bbfbc25c8177ee416bae64", null ]
    ] ],
    [ "mtb_ipc_queue_event_t", "group__group__mtb__ipc.html#gaa3205ac185f28b5b3936ed9f11bd4bb0", [
      [ "MTB_IPC_NO_INTR", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0af6afc578f9b0b2e6fa52d1967a709c1a", null ],
      [ "MTB_IPC_QUEUE_WRITE", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0a2377df6650449c51a53aa3abf9b6da11", null ],
      [ "MTB_IPC_QUEUE_READ", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0a3660702f6f01fd218d20249409f67ff9", null ],
      [ "MTB_IPC_QUEUE_FULL", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0a156bbb899338a86f5498228a5984be9e", null ],
      [ "MTB_IPC_QUEUE_EMPTY", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0af1a9f1e2a2a71b43dc695dc6fc963202", null ],
      [ "MTB_IPC_QUEUE_RESET", "group__group__mtb__ipc.html#ggaa3205ac185f28b5b3936ed9f11bd4bb0aa44b0a57a39d58bd675cb1e9f9267f9f", null ]
    ] ],
    [ "mtb_ipc_init", "group__group__mtb__ipc.html#gaaaf411b3b461f486bee74ff525a4c055", null ],
    [ "mtb_ipc_get_handle", "group__group__mtb__ipc.html#gaeb5eee9279e69c234ed22e46c0a88949", null ],
    [ "mtb_ipc_semaphore_process_interrupt", "group__group__mtb__ipc.html#gaadca43ec5007c8d780174fb09b466712", null ],
    [ "mtb_ipc_queue_process_interrupt", "group__group__mtb__ipc.html#ga976166bf93f0b6000215efb71c0facd2", null ],
    [ "mtb_ipc_semaphore_init", "group__group__mtb__ipc.html#gaa0082bf49569af0d780ece839846c7cd", null ],
    [ "mtb_ipc_semaphore_get_handle", "group__group__mtb__ipc.html#ga476248a02c68c28cff1e1f415fceeb45", null ],
    [ "mtb_ipc_semaphore_free", "group__group__mtb__ipc.html#ga4c2deeac31d4308dc8b13f20424225ef", null ],
    [ "mtb_ipc_semaphore_take", "group__group__mtb__ipc.html#ga704fceb97b75fb0860151bf0dd7de6d3", null ],
    [ "mtb_ipc_semaphore_give", "group__group__mtb__ipc.html#gab2bf3817fbc862d075d2004aad94ba05", null ],
    [ "mtb_ipc_queue_init", "group__group__mtb__ipc.html#gadc6d95e301efa7163ff6a03e54067715", null ],
    [ "mtb_ipc_queue_free", "group__group__mtb__ipc.html#gac307847b7d4386e30e03e12d6a6690ca", null ],
    [ "mtb_ipc_queue_get_handle", "group__group__mtb__ipc.html#ga36701ae9978a74403d61c3d737773089", null ],
    [ "mtb_ipc_queue_register_callback", "group__group__mtb__ipc.html#ga7a5c867af568ef33088b9de2ab003f06", null ],
    [ "mtb_ipc_queue_enable_event", "group__group__mtb__ipc.html#ga07f82616eaccd59586ffaff76c0978b9", null ],
    [ "mtb_ipc_queue_put", "group__group__mtb__ipc.html#ga6269a2c17929ecd877fa6195ffe784d5", null ],
    [ "mtb_ipc_queue_get", "group__group__mtb__ipc.html#gaf5ce4240f876b0d08de09afcadb26396", null ],
    [ "mtb_ipc_queue_count", "group__group__mtb__ipc.html#ga7e0258272e499d08a32e0d7195e5da31", null ],
    [ "mtb_ipc_queue_reset", "group__group__mtb__ipc.html#ga4748737fb7ee00589741954ea98e753d", null ],
    [ "mtb_ipc_mbox_receiver_init", "group__group__mtb__ipc.html#gaa68c5d61259035b95e8d4a20bb552edb", null ],
    [ "mtb_ipc_mbox_sender_get_handle", "group__group__mtb__ipc.html#ga52e2b0cf072835e833763c0395b4b48f", null ],
    [ "mtb_ipc_mbox_receiver_free", "group__group__mtb__ipc.html#ga30fa1d0adab6edada3dec74e1ba20719", null ],
    [ "mtb_ipc_mbox_sender_free", "group__group__mtb__ipc.html#ga6ebbf319a4e2eb7fcfe011cc9f7d261c", null ],
    [ "mtb_ipc_mbox_receiver_register_callback", "group__group__mtb__ipc.html#ga33b413fc3eef39e29635122787064324", null ],
    [ "mtb_ipc_mbox_sender_register_callback", "group__group__mtb__ipc.html#ga9d2e30f7952410700a53203a57645f8e", null ],
    [ "mtb_ipc_mbox_sender_put", "group__group__mtb__ipc.html#gabc947c4789ad6bd42604ee86ff34cd9e", null ],
    [ "mtb_ipc_mbox_receiver_get", "group__group__mtb__ipc.html#ga8b3da334b3d0f08a6b95907fd6e35723", null ],
    [ "mtb_ipc_mbox_receiver_enable_event", "group__group__mtb__ipc.html#gabbc934fbf4c2e854cd665afffa0e9357", null ],
    [ "mtb_ipc_mbox_sender_enable_event", "group__group__mtb__ipc.html#ga2d808261b77880d943b092807b3fcbaa", null ]
];